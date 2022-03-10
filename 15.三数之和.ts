/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 * 
 * a + b = -c
 * 思路：
 * 1. 三层循环
 * 2. 排序 + 双指针
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => a - b)
  const returnArr = []
  let head = 0
  for (; head < sortedNums.length - 2; head++) {
    if (sortedNums[head] > 0) break
    if (head > 0 && sortedNums[head] === sortedNums[head - 1]) continue
    let left = head + 1
    let right = sortedNums.length - 1 
    while(left < right) {
      const s = sortedNums[head] + sortedNums[left] + sortedNums[right]
      if (s > 0) {
        right--
        while(left < right && sortedNums[right] === sortedNums[right+1]) {
          right--
        }
      } else if (s < 0) {
        left++
        while (left < right && sortedNums[left] === sortedNums[left-1]) {
          left++
        }
      } else {
        returnArr.push([sortedNums[head], sortedNums[left],sortedNums[right]])
        right--
        left++
        while (left < right && sortedNums[left] === sortedNums[left-1]) {
          left++
        }
        while(left < right && sortedNums[right] === sortedNums[right+1]) {
          right--
        }
      }
    }
  }

  return returnArr
};
// @lc code=end
function threeSum2(nums: number[]): number[][] {
  const arrSort = nums.sort((a, b) => a-b)
  const len = nums.length
  let returnArr = []
  const map = new Map()
  if (len < 3) return []
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        const possibleItem = [arrSort[i], arrSort[j], arrSort[k]]
        if (arrSort[i] + arrSort[j] + arrSort[k] === 0){
          if (!map.has(JSON.stringify(possibleItem))) {
            map.set(JSON.stringify(possibleItem), true)
            returnArr.push(possibleItem) 
          }
        }
      }
    }
  } 
  return returnArr
}

