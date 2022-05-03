/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  const colIndex = () => {
    let rowLow = -1
    let rowHigh = matrix.length - 1

    while (rowLow < rowHigh) {
      const mid = Math.floor((rowLow + 1 + rowHigh) / 2)
      if (matrix[mid][0] <= target ) {
        rowLow = mid
      } else {
        rowHigh = mid - 1
      }
    }

    return rowLow
  }

  let colIdx = colIndex()
  if (colIdx < 0) {
    return false
  }

  let col: number[] = matrix[colIdx]

  let colLow = 0
  let colHigh = col.length - 1
  while (colLow <= colHigh) {
    let mid = Math.floor((colLow + colHigh) / 2)
    if (col[mid] === target) {
      return true
    }

    if (col[mid] > target) {
      colHigh = mid - 1
    } else {
      colLow = mid + 1
    }
  }

  return false
};
// @lc code=end

