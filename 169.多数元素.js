/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Boyer-Moore 投票算法
var majorityElement = function(nums) {
  let tag, sub = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (sub === 0) {
      tag = nums[i];
      sub ++;
    }
    else {
      nums[i] === tag ? sub ++ : sub --;
    }
  }
  return tag;
};
// @lc code=end


// hash 计数法
// var majorityElement_v0 = function(nums) {
//   const map = {};
//   let max;
//   for (let i = 0; i < nums.length; i ++) {
//     if (map[nums[i]] === undefined) {
//       map[nums[i]] = 1;
//     }
//     else {
//       map[nums[i]] += 1;
//     }
//     if (max !== nums[i] && map[nums[i]] > (map[max] || 0)) max = nums[i];
//   }
//   return max;
// };