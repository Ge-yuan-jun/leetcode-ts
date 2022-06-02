/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  const len = nums.length

  const dp = new Array(len).fill(1)

  let res = 1

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        res = Math.max(dp[i], res)
      }
    }
  }

  return res
};
// @lc code=end

