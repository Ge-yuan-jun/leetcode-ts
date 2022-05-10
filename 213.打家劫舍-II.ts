/**
   * DP 方程:
   * 1. 偷 [0, n-1]
   * 2. 偷 [1, n]
   * 
   * dp[i] = max(dp[i-2]+nums[i], dp[i-1])
   */
 const robRange = (nums, start, end): number => {
  const dp = new Array(end - start + 1).fill(0)
  dp[0] = nums[start]
  dp[1] = Math.max(nums[start], nums[start + 1])

  let res = Math.max(dp[0], dp[1])
  for (let i = start + 2; i < end; i++) {
    dp[i - start] = Math.max(dp[i - start -1], dp[i - start - 2] + nums[i])
    res = Math.max(dp[i - start], res)
  }

  return res
}

function rob(nums: number[]): number {
  const len = nums.length
  if (len === 0) {
    return 0
  }

  if (len === 1) {
    return nums[0]
  }

  if (len === 2) {
    return Math.max(nums[0], nums[1])
  }

  return Math.max(robRange(nums, 0, len - 1), robRange(nums, 1, len))
}

/** 第二种解题方式 */
const robRangeSimple = (nums): number => {
  let cur = 0
  let pre = 0
  for (let num of nums) {
    [cur, pre] = [Math.max(pre + num, cur), cur]
  }
  return cur
}

function robSimple(nums) {
  const len = nums.length

  if (len === 0) {
    return 0
  }

  if (len === 1) {
    return nums[0]
  }

  if (len === 2) {
    return Math.max(nums[0], nums[1])
  }

  return Math.max(robRangeSimple(nums.slice(0, len - 1)), robRangeSimple(nums.slice(1, len)))
}