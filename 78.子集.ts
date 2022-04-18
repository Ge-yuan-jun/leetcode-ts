/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res = []
  const path = []
  const backTrace = (startIndex) => {
    res.push(path.slice())
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backTrace(i+1)
      path.pop()
    }
  }
  backTrace(0)
  return res
};
// @lc code=end

