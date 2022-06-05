/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  let index = 0, sign = 1, total = 0

  let max = Math.pow(2, 31) - 1
  let min = Math.pow(-2, 31)
  
  // 处理空格 
  while (s[index] === ' ' && index < s.length) {
    index++
  }
  // 只处理一次 + - 负号
  if (s[index] === '+' || s[index] === '-') {
    sign = s[index] === '+' ? 1 : -1
    index++
  }

  while (index < s.length) {
    let digit
    // 如果不是 ‘0’ - ‘9’ 之间的字符，则代表字符串不合格，选择跳出循环
    if (s[index] < '0' || s[index] > '9') {
      break
    } else {
      digit = Number(s[index])
    }
    if (Math.floor(max / 10) < total || (Math.floor(max / 10) === total && max % 10 < digit)) {
      return sign === 1 ? max : min
    }

    total = total * 10 + digit

    index++
  }
  return total * sign
}
// @lc code=end
