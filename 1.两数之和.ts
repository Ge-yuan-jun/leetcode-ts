/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const dict: Record<number, number> = Object.fromEntries(
    nums.map((val, index) => [val, index])
  )
  // 如果只是想判断是否存在，那么可以用函数式 immutable 的编程范式
  return nums.some(val => dict[target - val])
};
// @lc code=end

function twoSum1(nums: number[], target: number): number[] {
  const dict = new Map()

  for (let idx = 0; idx < nums.length; idx++) {
    const mapVal = dict.get(target - nums[idx])
    if (mapVal !== undefined) {
      return [mapVal, idx]
    }
    dict.set(nums[idx], idx)
  }
  return []
};