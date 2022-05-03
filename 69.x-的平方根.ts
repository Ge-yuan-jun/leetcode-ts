/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
  let low = 0
  let high = x
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    // 判断mid的平方是否小于或等于x，如果mid的平方小于x
    if (mid < x / mid) {
      low = mid + 1
    } else if (mid > x / mid) {
      // 如果mid的平方大于x，则x的平方根小于mid，接下来搜索1到mid-1的范围
      high = mid - 1
    } else {
      return mid
    }
  }

  return high
}
// @lc code=end

