/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {};
// @lc code=end

/**
 * hash 表
 * @param nums 
 * @returns 
 */
function majorityElement1(nums: number[]): number {
  const BaseCount = nums.length / 2
  const itemMap = new Map()
  let res = 0
  nums.forEach(item => {
    const mapItem = itemMap.get(item)
    if (mapItem) {
      itemMap.set(item, mapItem + 1)
    } else {
      itemMap.set(item, 1) 
    }
  })

  itemMap.forEach((value, key) => {
    if (value > BaseCount) {
      res = key
    }    
  })
  return res
};

/**
 * 排序
 * @param nums 
 * @returns 
 */
function majorityElement2(nums: number[]): number {
  nums = nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};