/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 * DP + 位运算
 */

// @lc code=start
function countBits(n: number): number[] {
  const bits = new Array(n+1).fill(0)
  // 如果 i 是 2 的正数次幂，则 i&(i-1) = 0
  for (let i = 1; i <= n; i++) {
    bits[i] += bits[i & (i - 1)] + 1 
  }

  return bits
};
// @lc code=end

