/*
 * @lc app=leetcode.cn id=410 lang=typescript
 *
 * [410] 分割数组的最大值
 * 
 * 
 * 一、二分查找数组
 * 
 * dp[i][j] 表示区间 [0, i] 中，划分为 j 个子数组
 * 这 j 个子数组各自和的最大值最小为 dp[i][j]
 * 
 * dp[i][j] = min(dp[i][j], max(dp[k][j-1], sum[i] - sum[k]))
 *    dp[k][j-1] 代表区间 [0, k] 中，划分为 j-1 个子数组
 *    这 j-1 个子数组各自和的最大值最小为 dp[k][j-1]
 * 
 * 需要枚举 k，将 [k, i] 视为一个子数组，由 dp[k][j-1] 状态推导出 dp[i][j] 的最小值。
 */

// @lc code=start
function splitArray(nums: number[], m: number): number {
  
};
// @lc code=end
/**
 * 抄的代码，没看懂
 * @param nums 
 * @param m 
 * @returns 
 */
function splitArrayDP(nums: number[], m: number): number {
  const len = nums.length;
	const sum = [];
	const dp = new Array(len).fill(0).map(() => new Array(m+1).fill(Number.MAX_SAFE_INTEGER));

	for(let i = 0; i < len; i++) {
		sum[i] = (sum[i-1] || 0) + nums[i];
	}

	for(let i = 0; i < len; i++) {
    dp[i][1] = sum[i];
		for(let j = 2; j <= m && j <= i + 1; j++) {
			for(let k = 0; k < i; k++) {
				dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j-1], sum[i] - sum[k]));
			}
		}
	}

  	// console.log(dp);
	return dp[len-1][m]
};