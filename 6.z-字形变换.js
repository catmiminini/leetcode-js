/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s
  const rows = Array(numRows)
    .fill(0)
    .map((_) => [])
  let rowi = 0
  let dir = 0
  for (let i = 0; i < s.length; i++) {
    rows[rowi]?.push(s.charAt(i))
    if (dir === 0) {
      rowi++
    } else {
      rowi--
    }
    if (rowi === 0) {
      dir = 0
    } else if (rowi === numRows - 1) {
      dir = 1
    }
  }
  const result = rows.reduce((res, item) => {
    return res + item.join('')
  }, '')
  return result
}
// @lc code=end
