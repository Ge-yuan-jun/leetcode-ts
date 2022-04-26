/*
 * @lc app=leetcode.cn id=433 lang=typescript
 *
 * [433] 最小基因变化
 */

// @lc code=start
function minMutation(start: string, end: string, bank: string[]): number {
  // 边界 case 处理
  if (start === end) {
    return 0
  }

  if (!bank.includes(end)) {
    return -1
  }

  // 生成 bank 对应的 Map
  const bankMap: Map<string, boolean> = new Map()

  for (let item of bank) {
    bankMap.set(item, true)
  }
  // 可能的字符修改集
  const charList: string[] = ['A', 'C', 'G', 'T']

  // 修改的次数
  let level: number = 0

  // 用于标记已经访问过的字符串
  const visitedStringMap: Map<string, boolean> = new Map()
  visitedStringMap.set(start, true)

  const queue: string[] = [start]

  while (queue.length) {
    let queueLen = queue.length
    while (queueLen) {
      queueLen--
      const curr = queue.shift()

      // 依次改变当前字符串每个位置的一个字符
      const curCharList = Array.from(curr)
      for (let i = 0; i < curCharList.length; i++) {
        const old = curCharList[i]

        for (let c of charList) {
          // 处理”变异“
          if (c === old) {
            continue
          }

          curCharList[i] = c
          
          const next = curCharList.join('')
          // 如果字符串没有被遍历过，同时也在 bankMap 中，则放入 queue 中，进入下一次循环
          if (!visitedStringMap.get(next) && bankMap.get(next)) {
            // 如果字符串相等，则表示找到了字符
            if (next === end) {
              return level + 1
            }

            visitedStringMap.set(next, true)
            // 这里将字符串继续加入循环
            // 因为取是 shift，那么存储用 push
            queue.push(next)
          }
        }
        // 在下一次进入循环前复原原数据
        curCharList[i] = old
      }
    }
    level++
  }
  return -1
};
// @lc code=end

