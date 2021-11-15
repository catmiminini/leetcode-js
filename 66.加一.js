/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits.length === 0) retrun [1];
  const size = digits.length;
  let c = 0;
  let vi = 0;
  for (let i = size - 1; i >= 0; i --) {
    i === size - 1 
      ? vi = digits[i] + 1
      : vi = digits[i] + c;
    
    if (vi > 9) {
      digits[i] = vi - 10;
      c = 1;
    }
    else {
      digits[i] = vi;
      c = 0;
      break;
    }
  }
  if (c !== 0) {
    digits.unshift(c);
  }
  return digits;
};
// @lc code=end

