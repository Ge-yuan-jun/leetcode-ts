/*
 * @lc app=leetcode.cn id=403 lang=typescript
 *
 * [403] 青蛙过河
 * 
 * dp[i][k] = dp[j][k-1] || dp[j][k] || dp[j][k+1]
 */

// @lc code=start
function canCross(stones: number[]): boolean {
  const len = stones.length

  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0))

  dp[0][0] = true

  /**
   * 当第 ii 个石子与第 i-1i−1 个石子距离超过 ii 时，青蛙必定无法到达终点
   */
  for (let i = 1; i < len; i++) {
    if (stones[i] - stones[i - 1] > i) {
      return false
    }
  }

  /**
   * 从后向前枚举「上一次所在的石子编号」jj
   * 当「上一次跳跃距离」kk 超过了 j+1 时
   * 我们即可以停止跳跃，因为在第 j 个石子上我们至多只能跳出 j+1 的距离
   */
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const k = stones[i] - stones[j]
      if (k > j + 1) {
        break
      }
      dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1]

      if (len - 1 === i && dp[i][k]) {
        return true
      }
    }
  }
  
  return false
};
// @lc code=end

