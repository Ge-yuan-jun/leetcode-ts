/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const len = nums.length
  const ans = []

  const visited = new Array(len).fill(false)

  const curr = (path) => {
    if (path.length === len) {
      ans.push(path.slice())
      return
    }

    for (let i = 0; i < len; i++) {
      // 第一个条件用来保证不会生成重复的数组元素
      // 第二个条件保证在填第 \textit{idx}idx 个数的时候重复数字只会被填入一次即可
      if (visited[i] || (i > 0 && nums[i] === nums[i-1] && !visited[i - 1])) {
        continue
      }
      path.push(nums[i])
      visited[i] = true
      curr(path)
      path.pop()
      visited[i] = false
    }
  }
  // 先排序，排序之后可以在判断是否是重复的条件之后回溯
  nums.sort((x,y) => x - y)

  curr([])
  return ans
};
// @lc code=end

