/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {  
  return (n > 0) && (n & (n -1)) === 0
};
// @lc code=end

