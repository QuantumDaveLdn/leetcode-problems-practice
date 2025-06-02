// Find Minimum in Rotated Sorted Array - Medium
// 
// Problem Description:
// Suppose an array of length n sorted in ascending order has been rotated between 1 and n times. Return the minimum element in the array.
// 
// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// 
// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// 
// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11
// 
// Constraints:
// 1 <= nums.length <= 5000
// -5000 <= nums[i] <= 5000
// nums is sorted and rotated at some pivot.
// 
// Approach (Modified Binary Search):
// Use a modified binary search to find the minimum element by identifying the pivot point where the array is rotated, adjusting the search range based on whether the mid element is greater than the rightmost element.
// 
// Time Complexity: O(log n) - where n is the length of the array, as it's a binary search variant.
// Space Complexity: O(1) - only a few variables are used.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return nums[left];
    }
}