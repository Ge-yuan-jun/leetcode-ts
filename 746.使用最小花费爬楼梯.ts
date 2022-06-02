/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  const len = cost.length
  const dp = new Array(len+1).fill(0)
  dp[0] = dp[1] = 0
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
  }

  return dp[len]
};
// @lc code=end

