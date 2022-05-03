/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let low = 0 
  let high = nums.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) {
      return mid
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && nums[mid] >= target) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    } else {
      if (nums[high] >= target && nums[mid] <= target) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }

  return -1
};
// @lc code=end

