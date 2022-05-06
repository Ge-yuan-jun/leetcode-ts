/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const pathMap = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      pathMap[j] += pathMap[j- 1]
    }
  }
  return pathMap[n - 1]
};
// @lc code=end

function uniquePaths1(m: number, n: number): number {
  const pathMap = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    pathMap[i][0] = 1
  }

  for (let j = 0; j < n; j++) {
    pathMap[0][j] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      pathMap[i][j] = pathMap[i - 1][j] + pathMap[i][j - 1]
    }
  }

  return pathMap[m - 1][n - 1]
}