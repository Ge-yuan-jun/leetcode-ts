/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
/**
 * 并查集
 * @param board 
 */
class UnionFind {
  constructor(totalNodes) {
    this.parents = [...Array(totalNodes)].map((_ele, index) => index)
  }

  parents

  find(id) {
    if (this.parents[id] === id) {
      return id
    }

    this.parents[id] = this.find(this.parents[id])
    return this.parents[id]
  }

  union(x, y) {
    if (this.isConnected(x, y)) {
      return
    }

    this.parents[this.find(x)] = this.find(y)
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y)
  }
}

function solve(board: string[][]): void {
  const rows = board.length

  if (!rows) {
    return
  }

  const cols = board[0].length

  const UF = new UnionFind(rows * cols + 1)

  const dummyNode = rows * cols

  const node = (i, j) => (i * cols + j)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
          UF.union(node(i, j), dummyNode)
        } else {

          if (i > 0 && board[i-1][j] === 'O') {
            UF.union(node(i,j), node(i - 1, j))
          }
          
          if (i + 1 < rows && board[i+1][j] === 'O') {
            UF.union(node(i, j), node(i + 1, j))
          }
          
          if (j > 0 && board[i][j-1] === 'O') {
            UF.union(node(i, j), node(i, j - 1))
          }

          if (j + 1 < cols && board[i][j+1] === 'O') {
            UF.union(node(i, j), node(i, j + 1))
          }
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (UF.isConnected(node(i, j), dummyNode)) {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }
};
// @lc code=end
function solveBFS(board: string[][]): void {
  const m = board.length
  if (m === 0) {
    return
  }
  const n = board[0].length

  const queue = []

  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      queue.push([i, 0])
      board[i][0] = 'A'
    }

    if (board[i][n - 1] === 'O') {
      queue.push([i, n - 1])
      board[i][n - 1] = 'A'
    }
  }

  for (let i = 1; i < n - 1; i++) {
    if (board[0][i] === 'O') {
      queue.push([0, i])
      board[0][i] = 'A'
    }

    if (board[m-1][i] === 'O') {
      queue.push([m-1, i])
      board[m-1][i] = 'A'
    }
  }

  const dires = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  while (queue.length) {
    const cell = queue.shift()
    const x = cell[0]
    const y = cell[1]

    for (let dire of dires) {
      const newX = x + dire[0]
      const newY = y + dire[1]

      if (newX < 0 || newX >= m || newY < 0 || newY >= n || board[newX][newY] !== 'O') {
        continue
      }

      queue.push([newX, newY])
      board[newX][newY] = 'A'
    }
  }

  for (let i = 0; i < m; i++) {
    for (let k = 0; k < n; k++) {
      if (board[i][k] === 'A') {
        board[i][k] = 'O'
      } else if(board[i][k] === 'O') {
        board[i][k] = 'X'
      }
    }
  }
}


const DFS = (board, x, y) => {
  const m = board.length
  const n = board[0].length
  if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'O') {
    return
  }

  board[x][y] = 'A'
  DFS(board, x - 1, y)
  DFS(board, x + 1, y)
  DFS(board, x, y - 1)
  DFS(board, x, y + 1)
}

function solveDFS(board: string[][]): void {
  const m = board.length
  const n = board[0].length

  if (m === 0) {
    return
  }

  // 处理第一行直至最后一行边界为 O 的元素
  for (let i = 0; i < m; i++) {
    DFS(board, i, 0)
    DFS(board, i, n -1)
  }

  // 处理第二列直至倒数第二列边界为 O 的元素
  for (let j = 1; j < n - 1; j++) {
    DFS(board, 0, j)
    DFS(board, m - 1, j)  
  }

  for (let i = 0; i < m; i ++) {
    for (let k = 0; k < n; k++) {
      if (board[i][k] === 'A') {
        board[i][k] = 'O'  
      } else if (board[i][k] === 'O') {
        board[i][k] = 'X'  
      }
    }
  }
}