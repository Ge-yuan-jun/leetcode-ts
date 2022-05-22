/*
 * @lc app=leetcode.cn id=37 lang=typescript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
const isValid = (board, row, col, val) => {
  const n = board.length
  const blockRow = Math.floor(row / 3) * 3;
  const blockCol = Math.floor(col / 3) * 3

  for (let i = 0; i < n; i++) {
    if (board[row][i] === val || board[i][col] === val) {
      return false
    }

    /**
     * 验证 3*3 的数独里面有没有同样的值
     * 下面是第一种验证方法
     */
    // const curRow = blockRow + Math.floor(i/3)
    // const curCol = blockCol + (i % 3)

    // if (board[curRow][curCol] === val) {
    //   return false
    // }
  }

  /**
   * 这是第二种雁阵方法，将 3*3 的方框内的数值全部遍历一遍
   */
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[blockRow + i][blockCol + j] == val) {
        return false
      }
    }
  }

  return true
}

function solveSudoku(board: string[][]): void {
  const backTracking = (board) => {
    const n = board.length
    // 遍历每一个数独元素
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 非空值，继续下一次遍历
        if (board[i][j] !== '.') {
          continue
        }
        for (let val = 1; val <= 9; val++) {
          if (isValid(board, i, j, `${val}`)) {
            board[i][j] = `${val}` 
            if (backTracking(board)) {//合法返回ture
              return true
            }
          }
        }
        board[i][j] = '.'
        return false
      }
    }
    return true
  }

  backTracking(board)
}
// @lc code=end

