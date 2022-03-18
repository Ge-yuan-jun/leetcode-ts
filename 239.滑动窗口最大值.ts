/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * 单调队列
 * @param nums 
 * @param k 
 * @returns 
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
  const len = nums.length
  if (len === 0 || k === 0) return []
  const depue = []
  let res = new Array(len - k + 1)
  // 第一次创建窗口的单调队列
  for (let i = 0; i < k; i++) {
    // deque 保持单调增
    while (depue.length && nums[depue[depue.length - 1]] < nums[i]) depue.pop()
    depue.push(i)
  }
  res[0] = nums[depue[0]]
  for (let i = k; i < len; i++) {
    // nums[i-k] 是上次窗口的左边界，在本次需要移除出去
    if (nums[depue[0]] === nums[i - k]) depue.shift()
    while(depue.length && nums[depue[depue.length - 1]] < nums[i]) depue.pop()
    depue.push(i)
    // 将当前窗口的最大值赋值给数组 res
    res[i-k+1] = nums[depue[0]]
  }
  return res
};
// @lc code=end

/**
 * 暴力破解
 * @param nums 
 * @param k 
 * @returns 
 */
function maxSlidingWindow2(nums: number[], k: number): number[] {
  const len = nums.length
  const arr = []
  for (let i = 0; i < len - k + 1; i++) {
    let max = nums[i]
    for (let j = i+1; j < i + k; j++) {
        max = Math.max(max, nums[j])
    }
    arr.push(max)
  }
  return arr
}