/*
 * @lc app=leetcode.cn id=773 lang=typescript
 *
 * [773] 滑动谜题
 * 1. BFS
 * 2. a*
 */

// @lc code=start
const movesMap = {
  0: [1, 3],
  1: [0, 2, 4],
  2: [1, 5],
  3: [0, 4],
  4: [1, 3, 5],
  5: [2, 4]
}

function slidingPuzzleBFS(board: number[][]): number {
  const standard = '123450'

  let state = ''
  board.forEach(row => state += row.join(''))

  const visited = new Set([state])

  const queue = [[state, state.indexOf('0'), 0]]

  const swap = (state, pos: number, next: number): string => {
    let tmpArr: number[] = state.split('');
    [tmpArr[pos], tmpArr[next]] = [tmpArr[next], tmpArr[pos]]
    return tmpArr.join('')
  }

  while (queue.length) {
    const [state, pos, moves] = queue.shift() as [any, number, number]

    if (state === standard) {
      return moves
    }

    for (let next of movesMap[pos]) {
      const newState = swap(state, pos, next)

      if (visited.has(newState)) {
        continue
      }

      visited.add(newState)
      queue.push([newState, next, moves+1])
    }
  }
  return -1
};
// @lc code=end