/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  let maxArea = 0
  const stack  = []
  heights = [0, ...heights, 0]
  for (let i = 0; i < heights.length; i++) {
    while(heights[i] < heights[stack[stack.length -1]]) {
      const stackTopIndex = stack.pop()
      maxArea = Math.max(
        maxArea,
        // 这里宽度运算需要减 1，是因为 heights 中添加了一个值为0，
        // 这个值将所有的原来 heights 元素的索引全部加了1
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
      )
    }
    stack.push(i)
  }
  return maxArea
};
// @lc code=end

/**
 * 暴力破解加速，选择其中一个高度作为基准，开始向两边扩散排序
 * [8793，8793, xxx,xxx, 8793] 未通过
 * @param heights 
 * @returns 
 */
function largestRectangleArea2(heights: number[]): number {
  const len = heights.length
  let max = 0
  for (let i = 0; i < len; i++) {
    let curHeight = heights[i]
    let leftMin = i
    let rightMax = i
    for (let j = i - 1; j > 0; j--) {
      if (heights[j] >= curHeight) {
        leftMin = j
      } else {
        break
      }
    }
    for (let k = i + 1; k < len - 1; k++) {
      if (heights[k] >= curHeight) {
        rightMax = k
      } else {
        break
      }
    }
    max = Math.max(max, (rightMax - leftMin + 1) * curHeight)
  }
  return max
};
