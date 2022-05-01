/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * 正向贪心
 * @param nums 
 * @returns 
 */
function jump(nums: number[]): number {
  let len = nums.length
  let end = 0
  let maxPosition = 0
  let steps = 0
  for (let i = 0; i < len - 1; i++) {
    // 找能跳的最远的
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (i === end) {
      // 遇到边界，就更新边界，并且步数加一
      end = maxPosition
      steps++
    }
  }
  return steps
};
// @lc code=end

/**
 * 反向贪心
 * @param nums 
 * @returns 
 */
function jump1(nums: number[]): number {
  let position = nums.length - 1
  let steps = 0
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i
        steps++
      }
    }
  }
  return steps 
};