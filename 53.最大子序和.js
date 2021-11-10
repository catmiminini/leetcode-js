/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 分治法
var maxSubArray = function (nums) {
  function getMaxSubArrayInfo (left, right) {
    if (right === left) {
      return {
        maxLeftPad: nums[left],
        maxRightPad: nums[left],
        max: nums[left],
        sum: nums[left],
      }
    }

    let mid = Math.floor((left + right) / 2);
    const leftResult = getMaxSubArrayInfo(left, mid);
    const rightResult = getMaxSubArrayInfo(mid + 1, right);
    return {
      maxLeftPad : Math.max(leftResult.maxLeftPad, leftResult.sum + rightResult.maxLeftPad),
      maxRightPad : Math.max(rightResult.maxRightPad, rightResult.sum + leftResult.maxRightPad),
      max: Math.max(leftResult.max, rightResult.max, leftResult.maxRightPad + rightResult.maxLeftPad),
      sum: leftResult.sum + rightResult.sum
    }
  }

  const size = nums.length;
  if (size === 0) {
    return 0;
  }

  let result =  getMaxSubArrayInfo(0, size - 1);
  return result.max;
};
// @lc code=end

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// 动态规划
// var maxSubArray_v0 = function(nums) {
//   if (nums.length === 0) return 0;
//   let max = nums[0],
//   maxPadRight = nums[0],
//   numi;
//   for (let i = 1; i < nums.length; i ++) {
//     numi = nums[i];
//     maxPadRight = Math.max(numi, numi + maxPadRight);
//     max = Math.max(max, maxPadRight);
//   }
//   return max;
// };