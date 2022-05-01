/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  // 记录一个数组，按照索引一次代表已有 5、10、20的钞票数目
  const cashCount = [0, 0, 0]
  for (let bill of bills) {
    const leftBill = bill - 5
    
    for (let countIdx = 1; countIdx >= 0; countIdx--) {
      if (cashCount[countIdx] > 0) {}
    }
    if (leftBill === 15) {
      cashCount[2]++
      if (cashCount[1] > 0) {
        cashCount[1]--
        cashCount[0]--
      } else {
        cashCount[0] = cashCount[0] - 3 
      }
    } else if (leftBill === 5) {
      cashCount[0]--
      cashCount[1]++
    } else {
      cashCount[0]++
    }

    if (cashCount[0] < 0 || cashCount[1] < 0) {
      return false
    }
  }
  return true
};
// @lc code=end

