/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 省份数量
 */

// @lc code=start
class UnionFind {
  constructor(n) {
      this.parent = [...Array(n)].map((_ele, index) => index)
      this.groups = n
  }
  
  parent
  
  groups = 0
  
  find(id) {
      if (this.parent[id] === id) {
          return id
      }
      
      this.parent[id] = this.find(this.parent[id])
      
      return this.parent[id]
  }
  
  union(i, j) {
      const rootI = this.find(i)
      const rootJ = this.find(j)
      if (rootI === rootJ) {
          return
      }
      this.parent[rootI] = rootJ
      this.groups--
  }
}

function findCircleNum(isConnected: number[][]): number {
  const len = isConnected.length
  
  const UF = new UnionFind(len)
  
  for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
          if (isConnected[i][j] === 1) {
              UF.union(i, j)
          }
      }
  }
  
  return UF.groups
};
// @lc code=end

const DFS = (isConnected, visited, cities, i) => {
  for (let j = 0; j < cities; j++) {
    if (isConnected[i][j] === 1 && !visited.has(j)) {
      visited.add(j)
      DFS(isConnected, visited, cities, j)
    }
  }
}

function findCircleNumDFS(isConnected: number[][]): number {
  const cities = isConnected.length
  const visited = new Set()
  let provinces = 0

  for (let i = 0; i < cities; i++) {
    if (!visited.has(i)) {
      DFS(isConnected, visited, cities, i)
      provinces++
    }
  }
  return provinces
};

function findCircleNumBFS(isConnected: number[][]): number {
  const cities = isConnected.length
  const visited = new Set()
  let provinces = 0
  const queue = []

  for (let i = 0; i < cities; i++) {
    if (!visited.has(i)) {
      queue.push(i)

      while (queue.length) {
        const j = queue.shift()
        visited.add(j)
        for (let k = 0; k < cities; k++) {
          if (isConnected[j][k] === 1 && !visited.has(k)) {
            queue.push(k)
          }
        }
      }

      provinces++
    }
  }

  return provinces
};