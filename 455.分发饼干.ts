/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0
  let gIdx = 0
  for (let num of s) {
    if (num >= g[gIdx]) {
      count++
      gIdx++
    }
  }

  return count
};
// @lc code=end

function findContentChildrenMyVersion(g: number[], s: number[]): number {
  const sortedG = g.sort((a, b) => a - b)
  const sortedS = s.sort((a, b) => a - b)
  let count = 0
  let gIdx = 0
  let sIdx = gIdx
  while (gIdx < sortedG.length && sIdx < sortedS.length) {
    if (sortedG[gIdx] > sortedS[sIdx]) {
      sIdx++
    } else {
      count++
      sIdx++
      gIdx++
    }
  }

  return count
};