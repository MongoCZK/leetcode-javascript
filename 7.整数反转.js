/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = parseInt(x.toString()).toString().split('').reverse().join('');
  let num = (x > 0) ? parseInt(str) : -parseInt(str)
  if( (num > 0 && (num > (Math.pow(2,31)-1))) || (num<0 && num< -Math.pow(2,31)) ) return 0;
  return num;
};
// @lc code=end

