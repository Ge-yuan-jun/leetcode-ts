/*
 * @lc app=leetcode.cn id=1091 lang=typescript
 *
 * [1091] 二进制矩阵中的最短路径
 * 
 * 1. BFS
 * 2. DFS
 * 3. A*
 */

// @lc code=start
function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length - 1
  const queue = [0]

  if (grid[0][0] || grid[n][n]) {
    return -1
  }

  grid[0][0] = 1

  while (queue.length) {
    const curr = queue.shift()
    // 这里需要理解位运算
    const i = curr & (1 << 7) - 1
    const j = curr >> 7

    if (i === n && j === n) {
      return grid[i][j]
    }
    // 这里就是启发式算法的精髓
    for (let a = Math.max(i - 1, 0); a <= Math.min(i + 1, n); a++) {
      for (let b = Math.max(j - 1, 0); b <= Math.min(j + 1, n); b++) {
        if (grid[a][b] === 0) {
          grid[a][b] = grid[i][j] + 1
          queue.push(a + (b << 7))
        }
      }
    }
  }

  return -1
};
// @lc code=end
/**
 * 需要最小路径用 DFS，必须所有的路径遍历后才能得出结果，这一点会导致 超出时间限制
 * @param grid 
 * @returns 
 */
function shortestPathBinaryMatrixDFS(grid: number[][]): number {
  const rowLen = grid.length
  const colLen = grid[0].length

  // 首节点或尾结点非0，则false
  if (grid[0][0] === 1 || grid[rowLen-1][colLen-1] === 1) {
      return -1
  }
  // 1*1 矩阵
  if (rowLen === 1) {
    return 1
  }

  let minPath = Number.MAX_SAFE_INTEGER

  const DFS = (level, i, j) => {
    if (i === rowLen -1 && j === colLen - 1) {
      minPath = Math.min(minPath, level)
    }
  
    const dires = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ]
  
    if (i < 0 || i >= rowLen || j < 0 || j >= colLen || grid[i][j] === 1) {
      return
    }

    // 标志该节点已经被访问了
    grid[i][j] = 1

    for (let dire of dires) {
      DFS(level+1, i + dire[0], j + dire[1])
    }

    // 需要回溯一下这个答案
    grid[i][j] = 0
  }

  DFS(1, 0, 0)

  return minPath === Number.MAX_SAFE_INTEGER ? -1 : minPath
};

function shortestPathBinaryMatrixBFS(grid: number[][]): number {
  const rowLen = grid.length
  const colLen = grid[0].length

  // 首节点或尾结点非0，则false
  if (grid[0][0] === 1 || grid[rowLen-1][colLen-1] === 1) {
      return -1
  }
  // 1*1 矩阵
  if (rowLen === 1) {
    return 1
  }

  const dires = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  const queue = [[0, 0, 1]]

  while (queue.length) {
    const [i, j, path] = queue.shift()
    if (i === rowLen - 1 && j === colLen - 1) {
      return path
    }

    for (let dire of dires) {
      let nextI = i + dire[0]
      let nextJ = j + dire[1]
      if (nextI < 0 || nextI >= rowLen || nextJ < 0 || nextJ >= colLen || grid[nextI][nextJ] === 1) {
        continue
      }
      queue.push([nextI, nextJ, path + 1])
      grid[nextI][nextJ] = 1
    }
  }

  return -1
};