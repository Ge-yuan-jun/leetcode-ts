/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 * 
 * https://leetcode.cn/problems/generate-parentheses/solution/by-20182726-ci8b/
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const dp = [...Array(n+1)].map(() => [])

  dp[0] = ['']
  dp[1] = ['()']

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      let k = i - 1 - j

      for (let a = 0; a < dp[j].length; a++) {
        for (let b = 0; b < dp[k].length; b++) {
          dp[i].push(`(${dp[j][a]})${dp[k][b]}`)
        }
      }
    }
  }

  return dp[n]
};
// @lc code=end

function generateParenthesisDFS(n: number): string[] {
  const ans = []
  const recur = (left, right, n, s) => {
    // terminator
    if (left === n && right === n) { 
      // filter the invalid
      ans.push(s)
      return
    }

    // process current logic

    // drill down
    if (left < n) {
      recur(left + 1, right, n, s + '(')
    }

    if (left > right) {
      recur(left, right + 1, n, s + ')')
    }
  }
  recur(0, 0, n, "")
  return ans
}