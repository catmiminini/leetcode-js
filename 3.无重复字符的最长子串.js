/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  const sLength = s.length
  let l, r, maxLength
  l = r = maxLength = 0
  while (r < sLength) {
    if (!set.has(s.charAt(r))) {
      set.add(s.charAt(r))
      r++
      if (set.size > maxLength) {
        maxLength = set.size
      }
    } else {
      set.delete(s.charAt(l))
      l++
    }
  }
  return maxLength
}
// @lc code=end
