/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  let ans = []
  const k = nums.length
  // 需要利用一个 stack 记录访问过了那些节点
  let visited = new Array(nums.length).fill(false)
  const curr = (path) => {
    // 遍历到叶子结点了，可以返回了
    if (path.length === k) {
      // make a deep copy since otherwise we'd be append the same list over and over
      ans.push(path.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 如果没遍历过
      if (!visited[i]) {
        // 压入 path 数组，然后是否遍历过的数组此下标处变为 true
        path.push(nums[i])
        visited[i] = true
        // 继续 dfs，直到最后一层
        curr(path)
        // 进行回溯，还原，以便下一次使用
        visited[i] = false
        path.pop()
      }
      
    }
  }

  curr([])
  return ans
};
// @lc code=end

