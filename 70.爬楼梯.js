/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  const result = new Array(n);
  result[0] = 1;
  result[1] = 2;
  for (let i = 2; i < n; i ++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n - 1];
};
// @lc code=end

