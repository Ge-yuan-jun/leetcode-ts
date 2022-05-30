/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 */

// @lc code=start
function totalNQueens(n: number): number {
  let res = 0

  const backTract = (n, board = [], row = 0) => {
    if (row === n) {
      res += 1
      return
    }

    for (let col = 0; col < n; col++) {
      if (!board.some((bc, br) => bc === col || bc + br === col + row || bc - br === col - row)) {
        board.push(col)
        backTract(n, board, row + 1)
        board.pop()
      }
    }
  }
  backTract(n)
  return res
};
// @lc code=end

