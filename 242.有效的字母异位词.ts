/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  // 创建一个 hash 表，以26个字母作为 hash 值
  let arr = new Array(26).fill(0)
  for (let idx = 0; idx < s.length; idx++) {
    // charCodeAt 的值 - 97 是因为字符 a 的 utf 编码为 97
    arr[s.charCodeAt(idx) - 97] ++
  }
  for (let idx = 0; idx < t.length; idx++) {
    const count = arr[t.charCodeAt(idx) - 97]
    if (!count) {
      return false
    }
    arr[t.charCodeAt(idx) - 97] --
  }
  return true
};
// @lc code=end

/**
 * 这是一种暴力解法，时间复杂度、空间复杂度都很高
 * @param s 
 * @param t 
 * @returns 
 */
function isAnagram1(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const sList = s.split('')
  const tList = t.split('')
  for (let i = 0; i < sList.length; i++) {
    const idx = tList.indexOf(sList[i])
    if (idx > -1) {
      tList.splice(idx, 1)
    }
  }
  if (tList.length > 0) {
    return false
  } 
  return true
};