/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid[0][0] === 1) {
    return 0
  }

  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  const pathMap = new Array(m).fill(0).map(() => new Array(n).fill(0))
  
  // 初始化第一个点
  pathMap[0][0] = 1
  // 列
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1 || pathMap[i - 1][0] === 0) {
      pathMap[i][0] = 0  
    } else {
      pathMap[i][0] = 1
    }
  }

  // 行
  for (let i = 1; i < n; i++) {
    if (obstacleGrid[0][i] === 1 || pathMap[0][i - 1] === 0) {
      pathMap[0][i] = 0
    } else {
      pathMap[0][i] = 1
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      pathMap[i][j] = obstacleGrid[i][j] === 1 ? 0 : pathMap[i - 1][j] + pathMap[i][j - 1]
    }
  }
  // 到达(m-1,n-1)的路径数
  return pathMap[m - 1][n - 1]
};
// @lc code=end

