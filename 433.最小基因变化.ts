/*
 * @lc app=leetcode.cn id=433 lang=typescript
 *
 * [433] 最小基因变化
 * BFS
 * DFS
 * two-ended BFS
 */

// @lc code=start
function minMutation(start: string, end: string, bank: string[]): number {
  
};
// @lc code=end

function minMutationBFS(start: string, end: string, bank: string[]): number {
  const bankSet = new Set(bank)
  const queue = [[start, 0]]

  const charList = ['A', 'C', 'G', 'T']
  
  while (queue.length) {
    const [cur, level] = queue.shift() as [string, number]

    if (cur === end ) {
      return level
    }

    for (let i = 0; i < cur.length; i++) {
      for (let char of charList) {
        const newCur = cur.slice(0, i) + char + cur.slice(i+1)
        if (bankSet.has(newCur)) {
          queue.push([newCur, level + 1])
          bankSet.delete(newCur)
        }
      }
    }
  }

  return -1
};