/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
const isNumOrChar = (charOrNum) => {
  if (charOrNum.charCodeAt(0) >= 'a'.charCodeAt(0) && charOrNum.charCodeAt(0) <= 'z'.charCodeAt(0) || (charOrNum !== ' ' && !isNaN(Number(charOrNum)))) {
    return true
  }

  return false
}
function isPalindrome(s: string): boolean {
  const lowerS = s.toLowerCase()
  for (let i = 0, j = s.length - 1; i < j;) {
    const lowerI = lowerS[i]
    const lowerJ = lowerS[j]
    if (!isNumOrChar(lowerI)) {
      i++
      continue
    }
    if (!isNumOrChar(lowerJ)) {
      j--
      continue
    }

    if (lowerS[i] !== lowerS[j]) {
      return false
    }
    i++
    j--
  }
  return true
};
// @lc code=end

