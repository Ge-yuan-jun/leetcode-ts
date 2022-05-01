/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (max < i) {
      return false
    }
    max = Math.max(i + nums[i], max)
  }
  return true
};
// @lc code=end

function canJumpMoreCode(nums: number[]): boolean {
  if (nums.length === 0) {
    return true
  }
  // 因为手动取了第一个元素，所以遍历是从第二个元素开始的
  let i = 1
  for (let cur = nums[0]; cur !== 0 && i < nums.length; i++) {
    cur--
    // 检查现在格子里面的“能量”和你自己拥有的“能量”哪个更大，取更大的“能量”
    //  如果你有更多的能量，你就可以走的更远
    if (cur < nums[i]) {
      cur = nums[i]
    }
  }
  // 走完则说明 i 的长度与 nums 的长度一致
  return i === nums.length
};
