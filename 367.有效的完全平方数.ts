/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  let low = 1
  let high = num
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (mid * mid < num) {
      low = mid + 1
    } else if (mid * mid > num) {
      high = mid - 1
    } else {
      return true
    }
  }

  return false
};
// @lc code=end

