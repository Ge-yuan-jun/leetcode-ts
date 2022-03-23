/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * 将每一个词的进行字母出现的顺序作为 hash，保存每次出现的字符串
 * @param strs 
 */
function groupAnagrams(strs: string[]): string[][] {
  const mapVal = {}
  for (let item of strs) {
    const arr = new Array(26).fill(0)
    for (let c of item) {
      arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    if (!mapVal[arr.join()]) {
      mapVal[arr.join()] = []
    }
    mapVal[arr.join()].push(item) 
  }
  return Object.values(mapVal)
};
// @lc code=end
/**
 * 通过将字符串拆分排序后得到唯一的 hash 值，在这个 hashMap 里面存储每一个异位词
 * @param strs 
 * @returns 
 */
function groupAnagrams1(strs: string[]): string[][] {
  if (strs.length < 2) {
    return [strs]
  }
  let ans = []
  let mapVal = new Map()
  for (let i = 0; i < strs.length; i++) {
    const sortItem = strs[i].split('').sort().join('')
    if (mapVal.has(sortItem)) {
      const arr = mapVal.get(sortItem)
      arr.push(strs[i])
      mapVal.set(sortItem, arr)
    } else {
      mapVal.set(sortItem, [strs[i]]) 
    }
  }
  mapVal.forEach((val) => {
    ans.push(val)
  })
  return ans
};