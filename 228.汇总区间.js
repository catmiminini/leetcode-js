/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let result = [];
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] == null || nums[i] !== nums[i + 1] - 1) {
      result.push([start, i])
      start = i + 1;
    }
  }

  return result.map(([start, end]) => start === end ? `${nums[start]}` : `${nums[start]}->${nums[end]}`)
};
// @lc code=end

