/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const idleSum = n * (n + 1) / 2;
  let sum = nums.reduce((result, item) => result + item, 0);
  return idleSum - sum;
};
// @lc code=end

