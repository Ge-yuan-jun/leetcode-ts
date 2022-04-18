/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  // 利用分治的思想来写代码
  if (n === 0) { return 1 }

  if (n < 0) { return 1 / myPow(x, -n) }

  if (n % 2 > 0) { return x * myPow(x, n - 1) }

  return myPow(x * x, n / 2)
};
// @lc code=end

function myPow1(x: number, n: number): number {
  // 利用 res * res，而不是 x * x
  // 先处理负数的情况
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  // 处理指数为 0 的情况
  if (n === 0) {
    return 1
  }
  let res = 1
  for (let i = n; i !== 0; i /= 2) {
    if (i % 2 > 0) {
      res *= x
      i -= 1
    }
    x *= x
  }
  
  return res
};