/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let oldLength = nums.length;
  if(oldLength <= 1) return oldLength;
  
  let newLength = 1;
  for(let i = 1; i < oldLength; i ++) {
    if(nums[newLength - 1] < nums[i]) {
      if(newLength !== i) {
        nums[newLength] ^= nums[i];
        nums[i] ^= nums[newLength];
        nums[newLength] ^= nums[i];
      }
      newLength ++;
    }
  }
  return newLength;
};
// @lc code=end


// var removeDuplicates_v0 = function(nums) {
//   let oldLength = nums.length;
//   if(oldLength <= 1) return oldLength;
//   for(let i = oldLength; i > 0; i --) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1);
//     }
//   }
//   return nums.length;
// };


// var removeDuplicates_v1 = function(nums) {
//   let oldLength = nums.length;
//   if(oldLength <= 1) return oldLength;
  
//   let newLength = 1,
//       nextSwapPos = 1,
//       tmp;
//   for(let i = 1; i < oldLength; i ++) {
//     if(nums[newLength - 1] < nums[i]) {
//       if(newLength !== i) {
//         temp = nums[newLength];
//         nums[newLength] = nums[i];
//         nums[i] = temp;
//       }
//       newLength ++;
//     }
//   }
//   return newLength;
// };