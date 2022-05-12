/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 * 
 * 1. s[i] = 1
 * s[i-1][j] = 1 & s[i][j-1] = 1
 * 
 * 正方形宽度为
 * dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
  let max = 0
  const row = matrix.length
  const col = matrix[0].length
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0))

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        }
        max = Math.max(max, dp[i][j])
      }
    }
  }

  return max * max
};
// @lc code=end

