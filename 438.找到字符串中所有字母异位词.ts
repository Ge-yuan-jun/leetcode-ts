/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  if (p.length > s.length) {
    return []
  }
  const mapVal = {}
  for (let j = 0; j < p.length; j++) {
    mapVal[p[j]] = (mapVal[p[j]] || 0) + 1
  }
  const res = []

  const sMap = {}

  for (let i = 0; i < s.length - p.length + 1; i++) {
    if (i === 0) {
      for (let j = i; j < i + p.length; j++) {
        sMap[s[j]] = (sMap[s[j]] || 0) + 1
      }
    } else {
      sMap[s[i + p.length - 1]] = (sMap[s[i + p.length - 1]] || 0) + 1
    }    

    let match = true
    for (let key of Object.keys(mapVal)) {
      if (mapVal[key] !== sMap[key]) {
        match = false
      }  
    }
    sMap[s[i]]-- 
    if (match) {
      res.push(i)
    }
  }

  return res
};
// @lc code=end

