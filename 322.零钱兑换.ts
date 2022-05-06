/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 * 使用贪心算法的前提：coins 所有元素必须能整除 amount
 * 
 * 解法：
 * 1. 暴力递归：指数级
 * 2. BFS
 * 3. DP
 *    a. subProblems
 *    b. DP array f(n)=min(f(n-k) (k in coins)) + 1
 *      1 是面值为 k 的硬币
 *    c. DP 方程 
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0
  }

  const dp = new Array(amount + 1)  
  dp.fill(Number.MAX_VALUE)
  dp[0] = 0

  for (let currAmount = 1; currAmount <= amount; currAmount++) {
    for (let coin of coins) {
      let leftAmount = currAmount - coin
      // 剪枝
      if (leftAmount < 0 || dp[leftAmount] == Number.MAX_VALUE) {
        continue
      }
      dp[currAmount] = Math.min(dp[leftAmount] + 1, dp[currAmount])
    }
  }

  return dp[amount] == Number.MAX_VALUE ? -1 : dp[amount]
};
// @lc code=end

