/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const s = '   -42'
const CH_MAP = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}
const stateTable = {
  start: ['start', 'signed', 'inNumber', 'end'],
  signed: ['end', 'end', 'inNumber', 'end'],
  inNumber: ['end', 'end', 'inNumber', 'end'],
  other: ['end', 'end', 'end', 'end'],
}
var myAtoi = function (s) {
  const max = 2 ** 31 - 1
  const min = 2 ** 31 * -1
  let sign = 1
  let ans = 1
  let state = 'start'
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i)
    switch (state) {
      case 'start':
        if (ch === '') {}
        else if (ch === '+' || ch === '-') {
          state = 'signed'
          sign = ch === '-' ? -1 : 1
          
        }
        else if (ch >= '0' && ch <= '9') {
          state = 'inNumber'
          ans = ans * 10 + Number(ch)
        } else {
          return 0;
        }
        break;
      case 'signed':
        break;
      case 'inNumber':
        break;
      default:
        break;
    }
  }

  sign = sign || 1
  console.log(sign, digitArr)
  if (digitArr.length === 0) return 0
  else if (digitArr.length === 1) result = sign * digitArr[0]
  else result = sign * digitArr.reduce((int, item) => int * 10 + item)

  if (result > max) return max
  if (result < min) return min
  return result
}
console.log(myAtoi(s))
// @lc code=end
