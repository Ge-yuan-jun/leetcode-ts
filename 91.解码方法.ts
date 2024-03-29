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
    /**
     * 下面的语句描述的是只取一个值的情况
     * 这里处理了 i=1 的情况
     * if (i !== 1)
     *  dp[i] = dp[i-1] (dp[i] 默认为 0， 也可以说 dp[i] = 0 + dp[i - 1] 等同于 dp[i] += dp[i-1])
     * else
     *  dp[i] = 1 = 0 + dp[0] 即 dp[i] += dp[i-1]
     */
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

