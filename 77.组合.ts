/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  let ans = []

  /**
   * 
   * @param start start是枚举选择的起点
   * @param path path是当前构建的路径（组合)
   * @returns 
   */
  const curr = (start, path) => {
    if (path.length === k) {
      // 拷贝一份path，推入 ans
      ans.push(path.slice())
      // 结束当前递归
      return
    }

    // 枚举出所有选择
    for (let i = start; i <= n; i++) {
      // 选择
      path.push(i)
      // 向下继续选择
      curr(i + 1, path)
      // 撤销选择
      path.pop()
    }
  }

  // 递归的入口，从数字1开始选
  curr(1, [])
  return ans
};
// @lc code=end

