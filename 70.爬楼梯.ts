/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start

/**
 * 空间换时间
 * 升维
 * 找最近重复子问题
 * 
 * f(1)：1
 * f(2)：2
 * f(3)：f(2) + f(1)
 * f(4)4：f(2) + f(3)
 * f(n)：f(n-1) + f(n-2)
 * 
 * 实际就是斐波拉切数列
 * 但如果是递归，时间复杂度较高
 * @param n 
 * @returns 
 */
function climbStairs(n: number): number {
  if (n <= 2) {
    return n
  }
  let step1 = 1
  let step2 = 2
  let step3 = 3
  for (let index = 3; index < n + 1; index ++) {
    // 不用递归这种做法去做，每次只保留自己想要的值，其它的可以舍弃
    step3 = step1 + step2
    step1 = step2
    step2 = step3
  }
  
  return step3
};
// @lc code=end

/**
 * 递归写法（leetcode 超出时间限制）
 * @param n 
 * @returns 
 */
function climbStairs2(n: number): number {
  const dfs = (n) => {
    if (n <= 2) {
      return n
    }
    return dfs(n-1) + dfs(n-2)
  }
  return dfs(n)
}

/**
 * 组合数学的写法
 * @param n 
 */
function climbStairs3(n: number): number {
  /**
   * 斐波那契数列通项公式（排列组合的知识）,重写 pow 方法，可以将时间复杂度降至 O(logn)
   * (Math.pow((1 + Math.sqrt(5))/2, n) - Math.pow((1-Math.sqrt(5))/2, n))/Math.sqrt(5)
   */
  const C = (n, m) => {
    if (m === n) return 1
    let molecule = 1 // 分子为 1
    let denominator = 1 // 分母置为 1
    for (; m > 0; m--) {
      molecule *= n
      denominator *= m
      n-- 
    }

    return molecule / denominator
  }
  if (n === 1) {
    return 1
  }
  let res = 0
  for (let i = 1; i <= n/2; i++) {
    res += C(n-i, i)
  }

  return res + 1
}
