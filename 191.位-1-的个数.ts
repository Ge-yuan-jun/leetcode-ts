/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  let count = 0
  while (n !== 0) {
    count++
    // 清零最低位的1
    n = n & (n - 1)
  }

  return count
};
// @lc code=end

