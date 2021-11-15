/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const findMinIndex = (nums, target, endIndex) => {
    let start = 0;
    let end = endIndex;
    let cursor = (start + end + 1) / 2; 
    while (true) {
      let newCursor = (0 + cursor) / 2;
      if(nums[newCursor] < target) {

      }

      if ()
    }
    return ;
  }

  const findMaxIndex = (nums, start) => {
    return;
  }

  const len = nums.length;
  let left = 0;
  let right = len;

  while (true) {
    if (nums[left] !== target) {
      left ++;
    }
    if (nums[right] !== target) {
      right --;
    }

    // if target dosen't exist in nums
    if (left > right) {
      left = -1;
      right = -1;
      break;
    }

    // if got target boundary
    if (nums[left] === target && nums[right] === target) {
      break;
    }
  }

  return [left, right];
};



// 时间复杂度n
// 左右向中间靠
// var searchRange_n = function(nums, target) {
//   const len = nums.length;
//   let left = 0;
//   let right = len;

//   while (true) {
//     if (nums[left] !== target) {
//       left ++;
//     }
//     if (nums[right] !== target) {
//       right --;
//     }

//     // if target dosen't exist in nums
//     if (left > right) {
//       left = -1;
//       right = -1;
//       break;
//     }

//     // if got target boundary
//     if (nums[left] === target && nums[right] === target) {
//       break;
//     }
//   }

//   return [left, right];
// };
// @lc code=end

