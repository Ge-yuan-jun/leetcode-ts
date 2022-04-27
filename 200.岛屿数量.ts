/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  const turnZero = (queue, grid) => {
    const dirs = [[0,1], [1, 0], [0, -1], [-1, 0]]
    while (queue.length) {
      const curr = queue.shift()
      for (const dir of dirs) {
        const x = curr[0] + dir[0]
        const y = curr[1] + dir[1]
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
          continue
        }
        grid[x][y] = '0'
        queue.push([x, y])
      }
    }
  }

  let count = 0
  let queue = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        grid[i][j] = '0'
        queue.push([i, j])
        turnZero(queue, grid)
      }
    }
  }

  return count
};
// @lc code=end

function numIslandsDFS(grid: string[][]): number {
  let count = 0

  const turnZero = (i, j, grid) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
      return
    }

    grid[i][j] = '0'

    turnZero(i, j - 1, grid)
    turnZero(i, j + 1, grid)
    turnZero(i + 1, j, grid)
    turnZero(i - 1, j, grid)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        turnZero(i, j, grid)
      }
    }
  }

  return count
}