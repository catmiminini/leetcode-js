/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 使用滑动窗口
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();
  let l = 0;
  let r = 0;
  while(r < nums.length) {
    if (r - l > k) {
      set.delete(nums[l]);
      l++;
    }
    if(set.has(nums[r])) {
      return true;
    }
    set.add(nums[r]);
    r++;
  }

  return false;
};
// @lc code=end

containsNearbyDuplicate([1,2,3,1], 3);
