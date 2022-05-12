/*
 * @lc app=leetcode.cn id=363 lang=typescript
 *
 * [363] 矩形区域不超过 K 的最大数值和
 * 
 */

// @lc code=start
/**
 * 暴力解法，是不是很理解，也不能理解动态规划
 * @param matrix 
 * @param k 
 * @returns 
 */
function maxSumSubmatrix(matrix: number[][], k: number): number {
  const row = matrix.length
  const col = matrix[0].length
  let maxSum = -Infinity
  const sums = Array(row)
  for (let i = 0; i < col; i++) {
    sums.fill(0)
    for (let j = i; j < col; j++) {
      for (let c = 0; c < row; c++) {
        sums[c] += matrix[c][j]
      }
      for (let i = 0; i < row; i++) {
        let sum = 0
        for (let j = i; j < row; j++) {
          sum += sums[j]

          if (sum > maxSum && sum <= k) {
            maxSum = sum
          }
        }
      }
    }
  }
  return maxSum
};
// @lc code=end

