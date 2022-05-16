/*
 * @lc app=leetcode.cn id=212 lang=typescript
 *
 * [212] 单词搜索 II
 * 
 * 1. words 遍历 -> board 里面找
 * 4通路
 * O(N*m*m*4^k)
 * 
 * 2. trie
 *  words 全部加入一个 trie，构建起 prefix
 *  board，进行 DFS
 */

// @lc code=start
class Trie {
  constructor() {
    this.children = {}
  }

  children

  insert(word: string): void {
    let node = this.children
    for (let char of word) {
      if (!node[char]) {
        node[char] = {}
      }
      node = node[char]
    }
    node.isEnd = true
  }
}

function findWords(board: string[][], words: string[]): string[] {
  if (!board || !board[0]) {
    return []
  }

  if (!words) {
    return []
  }

  const ret: string[] = []
  const visited = new Map()

  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, 1, -1]

  const m = board.length
  const n = board[0].length

  const trieTree = new Trie()

  for (let word of words) {
    trieTree.insert(word)
  }

  const DFS = (x, y, nodes, str) => {
    if (nodes[board[x][y]].isEnd) {
      ret.push(`${str}${board[x][y]}`)
      // 设置为 false 是为了防止重复将字符串加入 ret 中
      nodes[board[x][y]].isEnd = false
    }

    // 处理本层
    nodes = nodes[board[x][y]]
    str += board[x][y]

    // 记录已经访问过的四通位置
    visited.set(x * 100 + y, true)

    for (let i = 0; i < dx.length; i++) {
      const newI = x + dx[i]
      const newJ = y + dy[i]
      // 处理四通边界情况
      if (newI < 0 || newJ < 0 || newI >= m || newJ >= n || visited.get(newI * 100 + newJ) || !nodes[board[newI][newJ]]) {
        continue
      }
      DFS(newI, newJ, nodes, str)
    }
    visited.set(x * 100 + y, false)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (trieTree.children[board[i][j]]) {
        DFS(i, j, trieTree.children, "")
      } 
    }
  }

  return ret
};
// @lc code=end

