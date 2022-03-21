/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * 单调递减序列
 * @param height 
 * @returns 
 */
function trap(height: number[]): number {
  const len = height.length
  let ans = 0
  if (len <= 2) return 0
  // 需要计算宽度，所以单调栈里面存储的是 index
  const stack = []
  stack.push(0)
  // 如果是第一个柱子，则不接水
  for (let i = 1; i < len; i++) {
    let curHeight = height[i]
    // 如果比栈顶元素小，则无法形成凹槽
    if (curHeight < height[stack[stack.length - 1]]) {
      stack.push(i)
    } else if (height[stack[stack.length - 1]] === curHeight) {
      // 如果高度相同，则需要更新右边界
      stack.pop()
      stack.push(i)
    } else {
      while (stack.length && height[stack[stack.length - 1]] < curHeight) {
        const left = stack.pop()
        // 这个地方需要特别处理下，确认数组的长度是否 > 0,否则结果会变成 NaN
        if (stack.length) {
          const h = Math.min(height[stack[stack.length - 1]], curHeight) - height[left]
          const w = i - stack[stack.length - 1] - 1
          ans += h * w
        }
      }
      stack.push(i)
    }
  }
  return ans
}
// @lc code=end
/**
 * 暴力解法，以列为基本单位，通过计算每一列的高度来算出可以注水的多少
 * @param height 
 * @returns 
 */
function trap2(height: number[]): number {
  const len = height.length
  let ans = 0
  if (len <=2) return 0
  // 如果是第一个柱子或者最后一个柱子，则不接水
  for (let i = 0; i < height.length; i++) {
    if (i === 0 || i === height.length - 1) {
      continue
    }
    let curHeight = height[i]
    let leftMax = curHeight
    let rightMax = curHeight
    for (let j = i - 1; j >= 0; j-- ) {
      leftMax = Math.max(leftMax, height[j])
    }
    for (let j = i + 1; j < len; j++) {
      rightMax = Math.max(rightMax, height[j])
    }
    // 以列为单位的计算，宽度为1，不需要计算乘积
    let h = Math.min(leftMax, rightMax) - curHeight
    if (h > 0) {
      ans += h
    }
  }
  return ans
}