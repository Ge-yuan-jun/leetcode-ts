/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 * 
 * 解法：
 * 
 * DP
 *  a. 子问题
 *  b. 状态定义 
 *    第一种方案
 *      a[i] 0...i 能偷到的最大金额，需要进行升维处理
 *      0 代表不偷
 *      1 代表偷
 *      a[i][0] = max(a[i-1][0], a[i-1][1])
 *      a[i][1] = a[i-1][0] + nums[i]  
 *    第二种方案
 *      a[i] = max(a[i- 1], a[i-2] + nums[i])
 *  c. DP 方程
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }

  if (nums.length === 1) {
    return nums[0]
  }

  const len = nums.length

  const ans = new Array(len).fill(0)

  ans[0] = nums[0]
  ans[1] = Math.max(nums[0], nums[1])

  let res = Math.max(ans[0], ans[1])
  for (let i = 2; i < len; i++) {
    ans[i] = Math.max(ans[i - 1], ans[i - 2] + nums[i])
    res = Math.max(res, ans[i])
  }

  return res
};
// @lc code=end

function rob1(nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }

  const len = nums.length

  const ans = new Array(len).fill(0).map(() => new Array(len).fill(0))

  ans[0][0] = 0
  ans[0][1] = nums[0]

  for (let i = 1; i < len; i++) {
    ans[i][0] = Math.max(ans[i-1][0], ans[i-1][1])
    ans[i][1] = ans[i-1][0] + nums[i]
  }

  return Math.max(ans[len-1][0], ans[len-1][1])
};