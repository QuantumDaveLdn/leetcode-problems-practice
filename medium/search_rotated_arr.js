// Search in Rotated Sorted Array - Medium
// 
// Problem Description:
// Given an integer array nums sorted in ascending order and rotated at an unknown pivot, and an integer target, return the index of target if it is in nums, or -1 if it is not.
// 
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// 
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// 
// Example 3:
// Input: nums = [1], target = 0
// Output: -1
// 
// Constraints:
// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// All values of nums are unique.
// nums is guaranteed to be rotated and sorted.
// -10^4 <= target <= 10^4
// 
// Approach (Modified Binary Search):
// Use a modified binary search to find the pivot and locate the target by determining which half of the array is sorted and adjusting the search range accordingly.
// 
// Time Complexity: O(log n) - where n is the length of the array, as it's a binary search variant.
// Space Complexity: O(1) - only a few variables are used.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const length = nums.length;
        let left = 0;
        let right = length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target <= nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (target >= nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
}
