// 一个环，有n个点（编号 0 ~ n-1 ）, 问从0点出发，经过k步回到原点（0点）有多少种方法 ?
// 可以转化为他相邻的点经过 k − 1步回到原点的问题，点 j 相邻的点即 j − 1 和 j + 1
function getStepNum (n, k) {
  if (n === 0 || n === 1) {
    return 1
  }
  // 如果只有2个元素，则偶数有1个方法，奇数则不能到达
  if (n === 2) {
    if ((k & 1) === 1) {
      // 判断为奇数 则不能到达
      return 0
    } else {
      return 1
    }
  }
  const dp = new Array(k+1).fill(0).map(() => new Array(n).fill(0))

  dp[0][0] = 1

  for (let i = 0; i < n; i++) {
    dp[0][i] = 0
  }

  for (let j = 1; j < k + 1; j++) {
    for (let i = 0; i < n; i++) {
      dp[j][i] = dp[j - 1][(i - 1 + n) % n] + dp[j - 1][(i + 1) % n]
    }
  }

  return dp[k][0]
}