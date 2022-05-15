/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 * 
 * 滑动窗口的写法
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  if (!t.length) {
    return ''
  }

  const countT = {}
  const window = {}

  //add countT occurence to hashmap
  for (let char of t) {
    countT[char] = (countT[char] || 0) + 1
  }

  // stores how much values in window matches countT hashmap
  let have = 0,
    // stores number of unique characters in t-string
    need = Object.keys(countT).length,
    // stores the start and end index of minimum substring
    res = [-1, -1], 
    // holds the length of minimum substring
    resLen = Infinity,  
    // pointer for left of window
    left = 0

  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    window[char] = (window[char] || 0) + 1

    if (char in countT && window[char] === countT[char]) {
      have++
    }

    while (have === need) {
      // if current substring is less in size compared to current min substring
      // then store current substring as min
      if (right - left + 1 < resLen) {
        res=[left , right]
        resLen=(right - left + 1)
      }

      // decrease the count of character in window
      window[s[left]]--

      if (s[left] in countT && window[s[left]] < countT[s[left]]) {
        have--
      }
      // decrease window size
      left++
    }
  }

  return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1)
};
// @lc code=end

