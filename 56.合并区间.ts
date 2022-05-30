/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const merged = []

  for (let interval of intervals) {
    if (!merged.length || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval)
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
    }
  }

  return merged
};
// @lc code=end

