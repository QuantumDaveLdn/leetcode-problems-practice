// Contains Duplicate - Easy
// 
// Problem Description:
// Given an integer array nums, return true if any value appears 
// more than once in the array, otherwise return false.
// 
// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true
// 
// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false
//
// Approach:
// Use a Set data structure to store unique elements. Since Sets only contain
// unique values, if the array length is greater than the Set size, there must
// be duplicates.
//
// Time Complexity: O(n) - iterate through array once to create Set
// Space Complexity: O(n) - Set stores up to n unique elements

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicates = new Set(nums);
        if (nums.length > duplicates.size) {
            return true;
        }
        return false;
    }
}
