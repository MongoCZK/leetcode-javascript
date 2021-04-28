/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let arr1 = [], arr2 = [];
  let len = x.toString().length;
  if(len%2 !=0 ){
    arr1 = x.toString().slice(0,(len-1)/2).split('');
    arr2 = x.toString().slice((len-1)/2+1 , len).split('').reverse();
  }else{
    arr1 = x.toString().slice(0,len/2).split('');
    arr2 = x.toString().slice(len/2 , len).split('').reverse();
  }

  for(let i=0; i<arr1.length;i++){
    if(arr1[i] != arr2[i]) return false;
  }
  return true;
};
// @lc code=end

