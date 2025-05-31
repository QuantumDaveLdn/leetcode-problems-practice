/*
 * Binary Search - Easy
 * 
 * Problem Description:
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If it exists, then return its index, otherwise return -1.
 * 
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4.
 * 
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1.
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^4 < nums[i], target < 10^4
 * All values in nums are unique.
 * nums is sorted in ascending order.
 * 
 * Approach (Binary Search):
 * Use two pointers to maintain the search range, repeatedly divide the interval in half and adjust based on comparisons with the target.
 * 
 * Time Complexity: O(log n) - Each step halves the search space
 * Space Complexity: O(1) - Only a few variables are used
 */
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;
        let left = 0;
        let right = n - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}