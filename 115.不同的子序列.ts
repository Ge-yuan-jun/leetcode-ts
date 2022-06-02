/*
 * @lc app=leetcode.cn id=115 lang=typescript
 *
 * [115] 不同的子序列
 * 二维数组 dp，其中 dp[i][j] 表示在 s[i:] 的子序列中 t[j:] 出现的个数
 */

// @lc code=start
function numDistinct(s: string, t: string): number {
  const sLen = s.length
  const tLen = t.length

  if (sLen < tLen) {
    return 0
  }

  if (s === t) {
    return 1
  }

  const dp = new Array(sLen+1).fill(0).map(() => new Array(tLen).fill(0)) 

  for (let i = 0; i <= sLen; i++) {
    dp[i][tLen] = 1
  }

  for (let i = sLen - 1; i >= 0; i--) {
    for (let j = tLen - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i+1][j+1] + dp[i+1][j]
      } else {
        dp[i][j] = dp[i+1][j]
      }
    }
  }
  return dp[0][0]
};
// @lc code=end

