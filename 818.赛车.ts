/*
 * @lc app=leetcode.cn id=818 lang=typescript
 *
 * [818] 赛车
 */

// @lc code=start
function racecar(target: number): number {
  if (target <= 0) {
    return 0
  }

  const dp = new Array(target + 1).fill(Number.MAX_SAFE_INTEGER)

  for (let i = 1; i <= target; i++) {
    //先向前走 forward 步，（1 << forward）- 1 即为 2^forward
    for (let forward = 1; (1 << forward ) - 1 < 2 * i; forward++) {
      // 向前走了forwardDistance
      let forwardDistance = (1 << forward) - 1
      // 对应第一种情况，走了forward步直接到达i
      if (forwardDistance === i) {
        dp[i] = forward
      } else if (forwardDistance > i) {
        // 对应第二种情况，越过了i
        dp[i] = Math.min(dp[i], forward + 1 + dp[forwardDistance - i])
      } else {
        //对应第三种情况，没有越过i
        //先回头走backward步
        for (let backward = 0; backward < forward; backward++) {
          let backwardDistance = (1 << backward) - 1
          //第一个+1是还没到达i，先回头，使用一个R
          //第二个+1是回头走了backwardDistance，再使用R回头走向i
          dp[i] = Math.min(dp[i], forward + 1 + backward + 1 + dp[i - forwardDistance + backwardDistance])
        }
      }
    }
  }
  return dp[target]
};
// @lc code=end

