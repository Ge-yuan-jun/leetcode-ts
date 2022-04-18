/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const digitsMap = new Map()
  digitsMap.set('2', 'abc')
  digitsMap.set('3', 'def')
  digitsMap.set('4', 'ghi')
  digitsMap.set('5', 'jkl')
  digitsMap.set('6', 'mno')
  digitsMap.set('7', 'pqrs')
  digitsMap.set('8', 'tuv')
  digitsMap.set('9', 'wxyz')

  if (!digits) {
    return []    
  }

  const res = []

  const backTrace = (path, index) => {
    if (path.length === digits.length) {
      res.push(path)
      return
    }
    const letters = digitsMap.get(digits[index])
    for (let letter of letters) {
      backTrace(path + letter, index + 1)
    }
  }

  backTrace('', 0)

  return res
};
// @lc code=end

