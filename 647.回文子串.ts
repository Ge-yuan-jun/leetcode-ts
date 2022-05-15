/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
function countSubstrings(s: string): number {
  const len = s.length

  if (len === 0) {
    return 0
  }

  let ans = 0

  const dp = new Array(len).fill(false).map(() => new Array(len).fill(false))

  for (let i = 0; i < len; i++) {
    dp[i][i] = true
    ans++
  }

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      dp[i][j] = (s.charAt(i) === s.charAt(j)) && (j - i < 3 || dp[i+1][j-1])

      if (dp[i][j]) {
        ans++
      }
    }
  }

  return ans
};
// @lc code=end

