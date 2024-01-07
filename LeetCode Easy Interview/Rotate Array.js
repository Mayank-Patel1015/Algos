/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  let leftHalf = new Array()
  let rightHalf = new Array()
  for (let i = nums.length - k; i < nums.length; i++) {
    leftHalf.push(nums[i])
  }
  for (let i = 0; i < nums.length - k; i++) {
    rightHalf.push(nums[i])
  }

  nums.length = 0
  nums.push(...leftHalf, ...rightHalf);
};
