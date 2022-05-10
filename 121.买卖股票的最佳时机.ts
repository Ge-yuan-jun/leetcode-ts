/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 * 
 * DP
 *  状态方程 
 *    dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
 *    
 *    解释：今天我没有持有股票，有两种可能：
 *    要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
 *    要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。    
 *
 *    dp[i][1] = max(dp[i-1][1], -prices[i])
 *    
 *    解释：今天我持有着股票，有两种可能：
 *    要么我昨天就持有着股票，然后今天选择 rest，所以我今天还持有着股票；
 *    要么我昨天本没有持有，但今天我选择 buy，所以今天我就持有股票了。
 * 
 *  dp[i][k][0 or 1]
 *  0 <= i <= n-1, 1 <= k <= K
 *  n 为天数，大 K 为最多交易数
 *  此问题共 n × K × 2 种状态，全部穷举就能搞定。
 *    for 0 <= i < n:
 *      for 1 <= k <= K:
 *          for s in {0, 1}:
 *              dp[i][k][s] = max(buy, sell, rest)
 * 
 * 
 * dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
 * dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][0] - prices[i]) 
 *         = max(dp[i-1][1][1], -prices[i])
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (prices.length === 0) {
    return 0
  }

  // base case: dp[-1][0] = 0, dp[-1][1] = -infinity
  let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < prices.length; i++) {
      // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
      // dp[i][1] = max(dp[i-1][1], -prices[i])
      dp_i_1 = Math.max(dp_i_1, -prices[i])
  }
  return dp_i_0
};
// @lc code=end

function maxProfit_much_space(prices: number[]): number {
  if (prices.length === 0) {
    return 0
  }
  const len = prices.length
  const dp = new Array(len).fill(-Infinity).map(() => new Array(len).fill(-Infinity))

  for (let i = 0; i < len; i++) {
    if (i - 1 < 0) {
      dp[i][0] = 0
      // 解释：
      //   dp[i][0] 
      //      = max(dp[-1][0], dp[-1][1] + prices[i])
      //      = max(0, -infinity + prices[i]) = 0
      dp[i][1] = -prices[i]
      // 解释：
      //    dp[i][1]
      //      = max(dp[-1][1], dp[-1][0]-prices[i])
      continue
    }
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp[i][1] = Math.max(dp[i-1][1], -prices[i])
  }

  return dp[len-1][0]
};