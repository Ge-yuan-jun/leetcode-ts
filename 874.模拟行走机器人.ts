/*
 * @lc app=leetcode.cn id=874 lang=typescript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
function robotSim(commands: number[], obstacles: number[][]): number {
  // 设定方向数组参数（这是最不容易想到的）
  let curDire = 0
  let direX = [0, 1, 0, -1]
  let direY = [1, 0, -1, 0]
  // 定义当前位置
  let curX = 0
  let curY = 0

  let comLen = commands.length

  let ans = 0

  const obstaclesSet = new Set()
  // 利用 Set 对象判断是否存在某一个坐标
  obstacles.forEach(item => {
    obstaclesSet.add(`${item[0]}-${item[1]}`)
  })

  for (let i = 0; i < comLen; i++) {
    if (commands[i] === -1) {
      // 向右转 90 度
      curDire = (curDire + 1) % 4
    } else if (commands[i] === -2) {
      // 向左转 90 度
      curDire = (curDire + 3) % 4
    } else {
      //  1 <= x <= 9：向前移动 x 个单位长度
      for (let j = 1; j <= commands[i]; j++) {
        // 试图走出一步，并判断是否遇到了障碍物
        let tmpX = curX + direX[curDire]
        let tmpY = curY + direY[curDire]
        //当前坐标不是障碍点，计算并与存储的最大欧式距离的平方做比较
        if (!obstaclesSet.has(`${tmpX}-${tmpY}`)) {
          curX = tmpX
          curY = tmpY
          ans = Math.max(ans, Math.pow(curX, 2) + Math.pow(curY, 2))
        } else {
          break
        }
      }
    }
  }
  return ans
};
// @lc code=end

