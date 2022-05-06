/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let mi = nums[0], ma = nums[0], res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [mi, ma] = [ma, mi]
    }

    ma = Math.max(ma * nums[i], nums[i])
    mi = Math.min(mi * nums[i], nums[i])
    res = Math.max(ma, res)
  }

  return res
};
// @lc code=end

