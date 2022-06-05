/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 * 
 * 1. 暴力
 * 2. 将字符串按照列数一次对比
 *  flower
 *  flow
 *  flight
 * 3. trie 树
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || char !== strs[j][i]) {
        return strs[0].substring(0, i)
      }
    }
  }

  return strs[0]
};
// @lc code=end

