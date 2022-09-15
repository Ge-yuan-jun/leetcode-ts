/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const mapVal = new Map()
  mapVal.set('(', ')')
  mapVal.set('{', '}')
  mapVal.set('[', ']')

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (mapVal.get(stack[0]) === s[i]) {
      stack.shift()
    } else {
      stack.unshift(s[i])
    }
  }

  return stack.length === 0
};
// @lc code=end

