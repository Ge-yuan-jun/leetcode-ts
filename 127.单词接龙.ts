/*
 * @lc app=leetcode.cn id=127 lang=typescript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * 双向 BFS
 */
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet: Set<string> = new Set(wordList)
  // 这里传入的值必须为 new Set([word])，不然 word 会被拆解成单个的字符串
  let beginSet: Set<string> = new Set([beginWord])
  let endSet: Set<string> = new Set([endWord])

  let len = 1

  while (beginSet.size > 0 && endSet.size > 0) {
    // 最小的 size
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet]
    }
    
    const nextSet: Set<string> = new Set()

    let done = false

    beginSet.forEach((val) => {
      for (let i = 0; i < val.length; i++) {
        for (let c = 97; c <= 122; c++) {
          const newWord = val.slice(0, i) + String.fromCharCode(c) + val.slice(i+1)
          if (endSet.has(newWord)) {
            done = true
          } else if (wordSet.has(newWord)) {
            nextSet.add(newWord)
            wordSet.delete(newWord)
          }
        }
      }
    })

    if (done) {
      return len + 1
    }

    len++

    beginSet = nextSet
  }

  return 0
};
// @lc code=end
/**
 * 单项 BFS
 */
function ladderLengthBFS(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList)
  // 1. 维护一个队列，让起点词入列，level 为 1，然后出列考察。
  const queue = [[beginWord, 1]]
  while (queue.length) {
    const [word, level] = queue.shift() as [string, number]
    // 3. 出列、入列…重复，当出列的单词和终点词相同，就遇到了终点词，返回它的 level
    if (word === endWord) {
      return level
    }

    for (let i = 0; i < word.length; i++) {
      // 2. 将逐个字符变成26字母之一，看看是否在单词表，如果在，该新词为下一层的转换词
      for (let c = 97; c <= 122; c++) {
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i+1)

        if (wordSet.has(newWord)) {
          // 将它入列，它的 level +1，并从单词表中删去这个词
          queue.push([newWord, level + 1])
          wordSet.delete(newWord)
        }
      }
    }
  }
  // 当队列为空时，代表考察完所有词，始终没有遇到终点词，没有路径通往终点
  return 0
};