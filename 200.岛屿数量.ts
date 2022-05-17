/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  if (grid.length === 0) {
    return 0
  }
    
  const parent = {}

  const m = grid.length
  const n = grid[0].length

  const DIRS = [[0,-1], [0,1], [-1, 0], [1,0]]

  class UnionFind {
    constructor() {
      // 初始化并查集
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (grid[i][j] === '1') {
            const id = `${i}_${j}`
            parent[id] = id
            this.size[id] = 1
          }
        }
      }
    }

    size = {}

    find(id) {
      if (parent[id] === id) {
        return id
      }
      // 路径扁平化
      parent[id] = this.find(parent[id])
      return parent[id]
    }

    union(x, y) {
      const rootX = this.find(x)
      const rootY = this.find(y)

      if (rootX === rootY) {
        return
      }

      if (this.size[rootX] > this.size[rootY]) {
        this.size[rootX] += this.size[rootY]
        parent[rootY] = rootX
      } else {
        this.size[rootY] += this.size[rootX]
        parent[rootX] = rootY
      }
    }
  }

  const UF = new UnionFind()

  for (let i = 0; i < m; i++){
    for (let j = 0; j < n; j++){
      if (grid[i][j] === '1'){
        let id = `${i}_${j}`;
        for (let dir of DIRS) {
          let ni = i+dir[0];
          let nj = j+dir[1];
          if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
            let nId = `${ni}_${nj}`
            if (grid[ni][nj] === '1') {
              UF.union(id, nId)
            }
          }
        }
      }
    }
  }

  const rootSet = new Set()

  for (let child in parent){
    let root = UF.find(child)
    if (!rootSet.has(root)) {
      rootSet.add(root)
    }
  }
  return rootSet.size
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

function numIslandsBFS(grid: string[][]): number {
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