/*
 * @lc app=leetcode.cn id=621 lang=typescript
 *
 * [621] 任务调度器
 * 
 * 不是太能理解这道题目
 */

// @lc code=start
function leastInterval(tasks: string[], n: number, h = Array(26).fill(0)): number {
    if (n === 0) return tasks.length
    for(let i = 0; i < tasks.length; i++) {
      h[tasks[i].charCodeAt(0) - 65]++
    }
    let max = Math.max(...h), maxCount = 0
    h.forEach(n => n === max && maxCount++)
    return Math.max((max - 1) * (n + 1) + maxCount, tasks.length)
};
// @lc code=end

