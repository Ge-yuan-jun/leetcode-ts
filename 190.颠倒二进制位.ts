/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
  let result = 0
  for (let i = 0; i < 32; i++) {
    // 将 n 视作一个长为 32 的二进制串，从低位往高位枚举 n 的每一位，将其倒序添加到翻转结果result中
    result = (result << 1) + (n & 1)
    // 每枚举一位就将 n 右移一位，原先的次低位就变成了最低位了
    n = n >> 1
  }
  // result 可能是负数，需要转换为正数
  return result >>> 0
};
// @lc code=end

