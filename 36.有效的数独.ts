/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  /**
   * 只验证其是否游戏，不验证其是否有解
   */
  for (let i = 0; i < 9; i++) {
    // 迭代行
    const rows = new Set()
    // 迭代列
    const cols = new Set()
    // 迭代 3*3 小数独
    const subBox = new Set()
  
    for (let k = 0; k < 9; k++) {
      let _row = board[i][k]
      let _col = board[k][i]
      let _box = board[3*Math.floor(i/3)+Math.floor(k/3)][3*(i%3)+(k%3)]

      if (_row !== '.') {
        if (rows.has(_row)) {
          return false
        }
        rows.add(_row)
      }

      if (_col !== '.') {
        if (cols.has(_col)) {
          return false
        }
        cols.add(_col)
      }

      if (_box !== '.') {
        if (subBox.has(_box)) {
          return false
        }
        subBox.add(_box)
      }
    }
  }
  return true
};
// @lc code=end

/**
 * 自己模拟的数组，从语言特性上不是很好
 * @param board 
 * @returns 
 */
function isValidSudokuNromal(board: string[][]): boolean {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const subBox = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))

  for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
      const char = board[i][k]
      // 这里用来判断需要记录字符出现的次数
      const index = char.charCodeAt(0) - '1'.charCodeAt(0)
      rows[i][index]++
      cols[k][index]++
      subBox[Math.floor(i/3)][Math.floor(k/3)][index]++

      if (rows[i][index] > 1 || cols[k][index] > 1 || subBox[Math.floor(i/3)][Math.floor(k/3)][index] > 1) {
        return false
      }
    }
  }
  return true
};