/*
 * @lc app=leetcode.cn id=493 lang=typescript
 *
 * [493] 翻转对
 */

// @lc code=start
const merge = (arr: number[], left: number, mid: number, right: number) => {
  const temp = new Array(right - left + 1).fill(0)

  let i = left, j = mid + 1, k = 0

  while (i <= mid && j <= right) {
    temp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++]
  }

  while (i <= mid) {
    temp[k++] = arr[i++]
  }
  
  while (j <= right) {
    temp[k++] = arr[j++]
  }

  for (let p = 0; p < temp.length; p++) {
    arr[left + p] = temp[p]
  }
}

const mergeSort = (arr: number[], left: number, right: number): number => {
  if (left >= right) {
    return 0
  }

  const mid = (left + right) >> 1

  let count = mergeSort(arr, left, mid) + mergeSort(arr, mid + 1, right)

  for (let i = left, j = mid + 1; i <= mid; i++) {
    while (j <= right && arr[i] > 2*arr[j]) {
      j++
    }
    count += j - (mid + 1)
  }
  merge(arr, left, mid, right)
  return count
}

function reversePairs(nums: number[]): number {
  return mergeSort(nums, 0, nums.length - 1)
};
// @lc code=end

