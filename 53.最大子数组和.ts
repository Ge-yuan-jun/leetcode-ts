/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 * 1. 暴力：n^2
 * 2. DP
 *    a. 分治（子问题） problem(i) = Max(subProblem(i- 1), 0) + a[i]
 *    b. 状态数组定义 f[i]
 *    c. DP 方程 f[i] = max(f[i - 1], 0) + a[i]
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const dp = [...nums]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]) 
  }

  return Math.max(...dp)
};
// @lc code=end

