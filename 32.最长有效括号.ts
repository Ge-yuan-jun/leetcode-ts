/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  let ans = 0
  const stack = [-1]

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (!stack.length) {
        stack.push(i)
      } else {
        ans = Math.max(ans, i - stack[stack.length - 1])
      }
    }
  }

  return ans
};
// @lc code=end

/**
 * 
 * 动态规划：状态方程
 * 
 * 1. s[i] = ')' & s[i-1] = '('
 *    dp[i] = dp[i-2] + 2
 * 
 * 2. s[i] = ')' & s[i-1] = ')'
 *    dp[i] = dp[i-1] + dp[i - dp[i-1] - 2] + 2
 */
function longestValidParenthesesDP(s: string): number {
  const len = s.length

  const dp = new Array(len).fill(0)

  let ans = 0

  for (let i = 1; i < len; i++) {
    if (s.charAt(i) === ')') {
      if (s.charAt(i-1) === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2
      } else if (i - dp[i-1] > 0 && s.charAt(i - dp[i-1] - 1) === '(') {
        dp[i] = dp[i-1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2
      } 
      ans = Math.max(ans, dp[i])
    }
  }

  return ans
};