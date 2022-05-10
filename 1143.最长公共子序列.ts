/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const memo = new Map()

  const recursion = (text1: string, text2: string, index1, index2, memo) => {
    if (index1 < 0 || index2 <0) {
      return 0
    }
    const key = `${index1}#${index2}`

    if (memo.has(key)) {
      return memo.get(key)
    }
    let result
    if (text1.charAt(index1) === text2.charAt(index2)) {
      result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1
    } else {
      result = Math.max(recursion(text1, text2, index1-1, index2, memo), recursion(text1, text2, index1, index2-1, memo))
    }

    memo.set(key, result)
    return result
  }

  return recursion(text1, text2, text1.length - 1, text2.length - 1, memo)
};
// @lc code=end

function longestCommonSubsequenceDP(text1: string, text2: string): number {
  const m = text1.length
  const n = text2.length
  const dp = new Array(m+1).fill(0).map(() => new Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1]
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1]

      if (c1 === c2) {
        // the current char of text1 and text2 matches
        // check diag for prev longest subsequence length and add 1
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // the current char of text1 and text2 does not match
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
};