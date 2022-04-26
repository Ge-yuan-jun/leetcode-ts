/*
 * @lc app=leetcode.cn id=127 lang=typescript
 *
 * [127] 单词接龙
 */

// @lc code=start
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
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
// @lc code=end

