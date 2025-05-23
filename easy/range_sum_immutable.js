// Range Sum Query - Immutable - Easy
//
// Problem Description:
// Given an integer array nums, handle multiple queries to calculate the sum
// of elements between indices left and right inclusive.
//
// Example:
// Input: ["NumArray", "sumRange", "sumRange", "sumRange"]
//        [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output: [null, 1, -1, -3]
//
// Constraints:
// 1 <= nums.length <= 10^4
// -10^5 <= nums[i] <= 10^5
// 0 <= left <= right < nums.length
// At most 10^4 calls to sumRange.
//
// Approach:
// Use prefix sum array to enable O(1) range queries.
//
// Time Complexity:
// - NumArray constructor: O(n) - building prefix sum array
// - sumRange: O(1) - constant time lookup
// Space Complexity: O(n) - storing prefix sum array

/**
* @param {number[]} nums
*/
var NumArray = function(nums) {
   this.nums = [];
   this.nums[0] = 0; // Initialize first element for 1-indexed prefix sum
   
   // Build prefix sum array
   for (let i = 0; i < nums.length; i++) {
       this.nums[i + 1] = this.nums[i] + nums[i];
   }
};

/**
* @param {number} left
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
   // Return difference between prefix sums for O(1) range query
   return this.nums[right + 1] - this.nums[left];
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/