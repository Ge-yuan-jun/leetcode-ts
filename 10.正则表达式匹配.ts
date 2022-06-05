/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 * 
 * dp[i][j] 表示是否匹配
 * i 表示 s 中 第 i 个字符
 * j 表示 p 中 第 j 个字符
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  if (!p || p.length === 0) {
    return !s || s.length ===0
  }
  const sLen = s.length
  const pLen = p.length
  const dp = new Array(sLen + 1).fill(false).map(() => new Array(pLen + 1).fill(false))
  dp[0][0] = true
  // 初始化状态下，只有第 i 个字符为 * 且前一个是匹配的才能是 true
  for (let i = 2; i < pLen; i++) {
    dp[0][i] = p[i-1] === '*' && dp[0][i-2]
  }

  for (let j = 1; j <= pLen; j++) {
    for (let i = 1; i <= sLen; i++) {
      if (p[j-1] === s[i-1] || p[j-1] === '.') {
        /**
         * 如果第 i 个字符与第 j 个字符相同
         * 或者 p 中第 j 个字符为 . 
         */
        dp[i][j] = dp[i-1][j-1]
      } else if (p[j-1] === '*') {
        /**
         * 处理 * 符号
         * 1. * 出现次数 > 0，用s中第i个字符与p中第 j-1 字符比较相等，则为 true
         * 2. * 出现次数 = 0，跳过 p 中第 j 个字符
         *    s 中第i个字符与p中第j-1个字符相等或者p中第j-1个字符为 .，
         */
        if (s[i-1] !== p[j-2] &&  p[j-2] !== '.') {
          dp[i][j] = dp[i][j-2]
        } else {
          dp[i][j] = dp[i][j-1] || dp[i][j-2] || dp[i-1][j]
        }
      }
    }
  }

  return dp[sLen][pLen]
};
// @lc code=end

