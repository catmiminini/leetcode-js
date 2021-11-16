/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 二分查找
var twoSum = function(numbers, target) {
  const size = numbers.length;
  for (let i = 0; i < size; ++i) {
    let low = i + 1, high = size - 1;
    while(low <= high) {
      let mid = Math.floor((high+low)/2);
      if (numbers[mid] === target - numbers[i]) {
        return [i + 1, mid + 1];
      }
      else if (numbers[mid] > target - numbers[i]) {
        high = mid - 1
      }
      else if (numbers[mid] < target - numbers[i]) {
        low = mid + 1;
      }
    }
  }
  return [];
};
// @lc code=end

// 双指针
// var twoSum_v0 = function(numbers, target) {
//   const size = numbers.length;
//   let left = 0;
//   let right = size - 1;
//   while (left < right) {
//     if (numbers[left] + numbers[right] === target) {
//       break;
//     }
//     else if (numbers[left] + numbers[right] > target) {
//       right --;
//     }
//     else if (numbers[left] + numbers[right] < target) {
//       left ++;
//     }
//   }
//   return [left + 1, right + 1];
// };
