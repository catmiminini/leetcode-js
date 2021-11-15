/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const numRows = rowIndex + 1;
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
  return result[rowIndex];
};
// @lc code=end

