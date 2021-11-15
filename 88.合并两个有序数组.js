/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (n === 0) return nums1;
  if (m === 0) {
    for (let i = n - 1; i >= 0; i --) {
      nums1[i] = nums2[i];
    }
  }
  // 变化的数组长度
  let i1 = m;
  let i2 = n;
  while(i1 !== 0 && i2 !== 0){
    if (nums2[i2-1] >= nums1[i1 -1]){
      nums1[i1+i2-1] = nums2[i2-1];
      i2--;
    }
    else {
      nums1[i1+i2-1] = nums1[i1-1];
      i1--;
    }
  }

  if (i2 !== 0) {
    for (let i = i2 - 1; i >= 0; i --) {
      nums1[i] = nums2[i];
    }
  }
};
// @lc code=end

