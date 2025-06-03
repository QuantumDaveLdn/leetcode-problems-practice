// Find the Duplicate Number - Medium
// 
// Problem Description:
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, there is exactly one repeated number, return this repeated number.
// 
// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2
// Explanation: The number 2 appears twice, so it is the duplicate.
// 
// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3
// Explanation: The number 3 appears twice, so it is the duplicate.
// 
// Constraints:
// 1 <= n <= 10^5
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
// 
// Approach (Floyd's Tortoise and Hare):
// Use two pointers to detect the cycle in the array (treating it as a linked list), then find the entrance of the cycle to identify the duplicate number.
// 
// Time Complexity: O(n) where n is the length of the array.
// Space Complexity: O(1) as we use only a constant amount of extra space.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];

        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast)

        slow = nums[0];
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        } 
        return slow;
    }
}