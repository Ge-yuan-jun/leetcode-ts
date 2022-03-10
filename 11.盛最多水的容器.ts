/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

/**
 * 1. 类似于冒泡写法，遍历两次，找出最大值(leetcode 未通过)
 * 2. 头尾的方式来写，只需要遍历一次，也是找出最大值
 */

// @lc code=start
/**
 * @param height 
 */
function maxArea(height: number[]): number {
  let maxArea: number = 0
  // 头指针
  let head = 0
  // 尾指针
  let tail = height.length - 1
  while (head < tail) {
    // 代码简洁版
    const minheight = height[head] < height[tail] ? height[head ++] : height[tail --]
    maxArea =  Math.max((tail - head + 1) * minheight, maxArea)
    // 代码分解版
    // Math.min(height[head], height[tail])
    // const width = tail - head
    // const square = minheight * width
    // if (height[head] > height[tail]) {
    //   tail -= 1
    // } else {
    //   head += 1
    // }
  }
  return maxArea
}
// @lc code=end

function maxArea2(height: number[]): number {
  let maxArea = 0
  for (let j = 0; j < height.length - 1; j++) {
    for (let i = j + 1; i < height.length; i++) {
      const computedArea = Math.min(height[j], height[i]) * (i - j)
      maxArea = Math.max(maxArea, computedArea)
    }
  } 
  return maxArea
}

