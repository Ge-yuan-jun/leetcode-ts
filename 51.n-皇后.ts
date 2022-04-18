/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

/**
 *
 *
 * @param {number} n
 * @return {*}  {string[][]}
 */
function solveNQueens(n: number): string[][] {
  /**
   * col: 列
   * row: 行
   * pie: col + row
   * na: col - row
   */
  const res = []

  const backTract = (res, n, board = [], row = 0) => {
    if (row === n) {
      res.push(board.map(col => ('.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))))
      return 
    }

    for (let col = 0; col < n; col++) {
      if (!board.some((bc, br) => bc === col || bc + br === col + row || bc - br === col - row)) {
        board.push(col)
        backTract(res, n, board, row + 1)
        board.pop()
      }
    }
  }

  backTract(res, n) 

  return res
};
// @lc code=end

