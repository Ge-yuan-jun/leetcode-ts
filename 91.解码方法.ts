/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start
function numDecodings(s: string): number {
  // border case
  if (!s || s === '0') {
    return 0
  }

  const len = s.length

  const dp = new Array(len + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= len; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1]
    }

    if (i > 1 && s[i-2] !== '0' && (Number(s[i-2]) * 10 + Number(s[i-1])) <= 26) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[len]
};
// @lc code=end

