/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = new Array(numRows);
  for (let i = 0; i < numRows; i ++) {
    const arr = [];
    for (let j = 0; j <= i; j ++) {
      if (j === 0 || j === i) {
        arr[j] = 1;
      }
      else {
        arr[j] = result[i - 1][j] + result [i - 1][j - 1];
      }
    }
    result[i] = arr;
  }
  return result;
};
// @lc code=end

