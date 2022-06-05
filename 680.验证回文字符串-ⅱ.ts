/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
const isValid = (s, i = 0, j = s.length - 1) => {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}
function validPalindrome(s: string): boolean {
  let i = 0, j = s.length -1
  while (i < j) {
    if (s[i] !== s[j]) {
      return isValid(s, i + 1, j) || isValid(s, i, j - 1)
    }
    i++
    j--
  }
  return true
};
// @lc code=end

