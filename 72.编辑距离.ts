/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 * 
 *
 * 状态转移方程
 * 1.当a[i] != b[j], min_edist(i,j) = min(min_edist(i-1,j)+1, min_edist(i,j-1)+1, min_edist(i-1, j-1)+1)
 * 2.当a[i] == b[j], min_edist(i,j) = min(min_edist(i-1,j)+1, min_edist(i,j-1)+1, min_edist(i-1, j-1))
 *
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  const  m = word1.length
  const n = word2.length

  if (n * m === 0) {
    return m + n
  }

  const minDisDp = (word1, word2, m, n) => {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

    for (let i = 0; i < m; i++) {
      if (word1[i] === word2[0]) {
        dp[i][0] = i
      } else if (i !== 0) {
        dp[i][0] = dp[i - 1][0] + 1
      } else {
        dp[i][0] = 1
      }
    }

    for (let i = 0; i < n; i++) {
      if(word2[i] === word1[0]) {
        dp[0][i] = i
      } else if (i !== 0) {
        dp[0][i] = dp[0][i - 1] + 1
      } else {
        dp[0][i] = 1
      }
    }

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, word1[i] === word2[j] ? dp[i-1][j-1] : dp[i - 1][j - 1] + 1)
      }
    }

    return dp[m - 1][n - 1]
  }

  return minDisDp(word1, word2, m, n)
};
// @lc code=end

