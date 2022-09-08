/*
 * @lc app=leetcode.cn id=667 lang=javascript
 *
 * [667] 优美的排列 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const result = Array(n)
  let min = 1
  let max = n
  let flag = 1
  let index = 0

  result[index++] = min++
  for (let i = 0; i < k - 1; i++) {
    if (flag === 1) {
      result[index++] = max--
      flag = -1
    } else {
      result[index++] = min++
      flag = 1
    }
  }
  if (flag === 1) {
    while (min <= max) {
      result[index++] = min++
    }
  } else {
    while (max >= min) {
      result[index++] = max--
    }
  }
  return result
}

console.log(constructArray(5, 2))
// @lc code=end
