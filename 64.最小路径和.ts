/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 * dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + nums[i][j]
 * 不是我变强了，是这道题目简单了
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const row = grid.length
  const col = grid[0].length
  
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0))

  dp[0][0] = grid[0][0]

  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }

  for (let i = 1; i < col; i++) {
    dp[0][i] = dp[0][i-1] + grid[0][i]
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    }
  }

  return dp[row - 1][col - 1]
};
// @lc code=end

