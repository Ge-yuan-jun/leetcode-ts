/*
 * @lc app=leetcode.cn id=1122 lang=typescript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
function relativeSortArray(arr1: number[], arr2: number[], res: number[] = [], countMap = new Map): number[] {
  arr1.forEach(val => countMap.set(val, (countMap.get(val) || 0) + 1))
  arr2.forEach(val => {
    res = res.concat(Array(countMap.get(val)).fill(val))
    countMap.delete(val)
  })

  Array.from(countMap.keys()).sort((a: number, b: number) => a - b).forEach(val => {
    res = res.concat(Array(countMap.get(val)).fill(val))
  })

  return res
};
// @lc code=end

