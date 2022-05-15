/*
 * @lc app=leetcode.cn id=312 lang=typescript
 *
 * [312] 戳气球
 * 
 * DP 方程：
 * 
 * i 为左区间
 * j 为右区间
 * k 为选中戳破的气球索引
 * 
 * total = dp[i][k] + val[i]*val[k]*val[j] + dp[k][j]
 * 
 * 代码源自这篇解析（还是没有太理解）
 * https://leetcode.cn/problems/burst-balloons/solution/zhe-ge-cai-pu-zi-ji-zai-jia-ye-neng-zuo-guan-jian-/
 */

// @lc code=start
function maxCoins(nums: number[]): number {
  // 增加两个哨兵锚点
  nums.unshift(1)
  nums.push(1)
  const len = nums.length
  const store = new Array(len).fill(0).map(() => new Array(len).fill(0))

  const range_best = (i, j) => {
    let m = 0
    for (let k = i + 1; k < j; k++) {
      let left = store[i][k]
      let right = store[k][j]

      let all = left + nums[i] * nums[k] * nums[j] + right

      if (all > m) {
        m = all
      }
    }

    store[i][j] = m
  }

  // 对每一个区间长度进行循环
  for (let n = 2; n < len; n++) {
    // 区间长度 
    // 长度从3开始，n从2开始

    // 对于每一个区间长度，循环区间开头的i
    for (let i = 0; i < len - n; i++) { // i+n = len(nums)-1
      // 计算这个区间的最多金币
      range_best(i, i + n)
    }
  }

  return store[0][len - 1]
};
// @lc code=end

