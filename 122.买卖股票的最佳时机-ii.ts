/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 * 
 * dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
 * dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
 *            = max(dp[i-1][k][1], dp[i-1][k][0] - prices[i])
 * 
 * 我们发现数组中的 k (代表交易次数)已经不会改变了，也就是说不需要记录 k 这个状态了
 * 
 * 则 DP 方程为下：
 * 
 * dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
 * dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let len = prices.length
  let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < len; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i])
  }

  return dp_i_0
};
// @lc code=end

/**
 * joke solutions
 */
function maxProfitJoke(prices: number[]): number {
  let profit = 0
  for (let i = prices.length - 1; i > 0; i--) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }

  return profit
}