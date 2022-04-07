/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
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
};
// @lc code=end

