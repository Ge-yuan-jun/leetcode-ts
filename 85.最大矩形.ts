/*
 * @lc app=leetcode.cn id=85 lang=typescript
 *
 * [85] 最大矩形
 */

// @lc code=start
function maximalRectangle(matrix: string[][]): number {
  const len = matrix.length

  if (len === 0) {
    return 0
  }

  const m = matrix.length
  const n = matrix[0].length

  const left = new Array(n).fill(0)
  const right = new Array(n).fill(n)
  const height = new Array(n).fill(0)

  let maxA = 0

  for (let i = 0; i < m; i++) {
    let curLeft = 0, curRight = n
    // compute height (can do this from either side)
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        height[j]++
      } else {
        height[j] = 0
      }
    }

    // compute left (from left to right)
    for (let k = 0; k < n; k++) {
      if (matrix[i][k] === '1') {
        left[k] = Math.max(left[k], curLeft)
      } else {
        left[k] = 0
        curLeft = k + 1
      }
    }

    // compute right (from right to left)
    for (let k = n-1; k >= 0; k--) {
      if (matrix[i][k] === '1') {
        right[k] = Math.min(right[k], curRight) 
      } else {
        right[k] = n
        curRight = k
      }
    }

    for (let k = 0; k < n; k++) {
      maxA = Math.max(maxA, (right[k] - left[k])* height[k])
    }
  }

  return maxA
};
// @lc code=end

