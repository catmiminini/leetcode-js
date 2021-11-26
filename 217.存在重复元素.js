/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// hash table 简单写法
var containsDuplicate = function(nums) {
  return nums.length !== new Set(nums).size;
};
// @lc code=end

// hash table
var containsDuplicate = function(nums) {
  let set = new Set();
  for(let i = 0; i < nums.length; i++) {
    if(set.has(nums[i])) {
      return true;
    }
    else {
      set.add(nums[i]);
    }
  }
  
  return false;
};