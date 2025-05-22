// Two Sum - Easy
// 
// Problem Description:
// Given an array of integers nums and an integer target, return indices of the two 
// numbers such that they add up to target.
// You may assume that each input has exactly one solution, and you may not use the 
// same element twice.
// Return the answer with the smaller index first.
// 
// Example 1:
// Input: nums = [3,4,5,6], target = 7
// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
// 
// Example 2:
// Input: nums = [4,5,6], target = 10
// Output: [0,2]
// 
// Example 3:
// Input: nums = [5,5], target = 10
// Output: [0,1]
//
// Constraints:
// 2 <= nums.length <= 1000
// -10,000,000 <= nums[i] <= 10,000,000
// -10,000,000 <= target <= 10,000,000
//
// Approach (Hash Map):
// Use a hash map to store each element's value and its index.
// For each element, check if its complement (target - current element) exists in the hash map.
// If found, return the indices of the complement and current element.
//
// Time Complexity: O(n) - one pass through the array
// Space Complexity: O(n) - storing at most n elements in the hash map

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (hash[complement] !== undefined) {
                return [hash[complement], i];
            }
            hash[nums[i]] = i;
        }
        return [];
    }
}