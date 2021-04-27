/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let arr = [];
  nums.forEach( (item,i)=>{
    let index = nums.lastIndexOf(target - item);
    (index > i) && arr.push(i,index);
  })
  return arr
};
// @lc code=end

