/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;
  let stack = [];
  return ans;
};
// @lc code=end

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);




// 动态规划纵向累积水量
// var trap = function (height) {
//   let ans = 0;
//   let leftMax = [];
//   let rightMax = [];
//   for (let i = 0; i < height.length; i++) {
//     i === 0
//       ? leftMax[i] = height[i]
//       : leftMax[i] = Math.max(leftMax[i - 1], height[i]);
//   }
//   for (let i = height.length - 1; i >= 0; i--) {
//     i === height.length - 1
//       ? rightMax[i] = height[i]
//       : rightMax[i] = Math.max(rightMax[i + 1], height[i]);
//   }
//   for (let i = 0; i < height.length; i++) {
//     let minBound = Math.min(leftMax[i], rightMax[i]);
//     if (height[i] < minBound) {
//       ans += minBound - height[i];
//     }
//   }
//   return ans;
// };


// 双指针空间优化动态规划算法
// var trap = function (height) {
//   let ans = 0;
//   let left = 0, right = height.length - 1;
//   let leftMax = 0, rightMax = 0;
//   while (left < right) {
//     leftMax = Math.max(leftMax, height[left]);
//     rightMax = Math.max(rightMax, height[right]);
//     if (height[left] < height[right]) {
//       ans += leftMax - height[left];
//       left++;
//     }
//     else {
//       ans += rightMax - height[right];
//       right--;
//     }
//   }
//   return ans;
// };