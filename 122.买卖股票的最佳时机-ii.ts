/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let profit = 0
  for (let i = prices.length - 1; i > 0; i--) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }

  return profit
};
// @lc code=end

/**
 * joke solutions
 */
function maxProfitJoke(prices: number[]): number {
  let profit = 0
  for (let i = prices.length - 1; i > 0; i--) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }

  return profit
}