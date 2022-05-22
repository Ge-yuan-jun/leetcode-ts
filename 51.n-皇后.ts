/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 * 
 * https://leetcode.com/problems/n-queens/discuss/19840/Simple-JavaScript-solution-using-backtracking
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
  
  /**
   * 
   * @param res 最终生成的值
   * @param n 棋盘的大小
   * @param board 棋盘上的皇后布局
   * @param row 遍历到的棋盘边
   * @returns 
   */
  const backTract = (res, n, board = [], row = 0) => {
    if (row === n) {
      res.push(board.map(col => ('.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))))
      return 
    }

    for (let col = 0; col < n; col++) {
      // little trick: br 是 index，从 0 开始，可以直接当成 row 来遍历使用
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

