/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {       // [3, 3]  5
  let left = 0,
    right = nums.length - 1;

  if (right === left) {
    if (nums[left] === val) return 0;
    else return 1;
  }

  while (left < right) {
    while (nums[left] !== val && left < right) {
      left++;
    }
    while (nums[right] === val && left < right) {
      right--;
    }
    if (left === right) {
      if (nums[right] === val) {
        return left;
      }
      else {
        return left + 1;
      }
    }
    // left < right
    else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }
  return right + 1;
};
// @lc code=end

// console.log(removeElement([3, 3], 5))






// var removeElement_v0 = function(nums, val) {
//   for(let i = nums.length - 1; i >= 0; i --) {
//     if(nums[i] === val) {
//       nums.splice(i, 1);
//     }
//   }

//   return nums.length;
// };