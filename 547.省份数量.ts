/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 省份数量
 */

// @lc code=start
const find = (parent, index) => {
  if (parent[index] === index) {
    return index
  } else {
    // 进行路径压缩
    parent[index] = find(parent, parent[index])
    return parent[index]
  }
}

const union = (parent, i, j) => {
  parent[find(parent, i)] = find(parent, j)
}

function findCircleNum(isConnected: number[][]): number {
  const cities = isConnected.length
  // init 并查集
  const parent = new Array(cities).fill(0).map((_element, index) => index)

  for (let i = 0; i < cities; i++) {
    for (let j = i + 1; j < cities; j++) {
      if (isConnected[i][j] === 1) {
        union(parent, i, j)
      }
    }
  }

  let provinces = 0

  parent.forEach((element, index) => {
    if (element === index) {
      provinces++
    }
  })

  return provinces
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