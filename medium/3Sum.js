/*
 * 3Sum - Medium
 * 
 * Problem Description:
 * Given an array nums of n integers, find all unique triplets in nums such that a + b + c = 0, and return the triplets in any order.
 * The solution set must not contain duplicate triplets.
 * 
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation: The unique triplets that sum to zero are [-1, -1, 2] and [-1, 0, 1].
 * 
 * Example 2:
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: No triplets sum to zero.
 * 
 * Example 3:
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * 
 * Constraints:
 * 0 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * Approach (Two Pointers):
 * First, sort the array to enable two-pointer technique and skip duplicates.
 * Iterate through the array with one pointer, and for each element, use two pointers (left and right) to find pairs that sum to the negation of the current element.
 * Skip duplicates to ensure unique triplets.
 * 
 * Time Complexity: O(n^2) - Sorting takes O(n log n), and the nested loop is O(n^2)
 * Space Complexity: O(1) - Excluding the space for the output array and sorting
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    const sorted = nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (sorted[i] === sorted[i - 1] && i > 0) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const total = sorted[i] + sorted[left] + sorted[right];

            if (total < 0) {
                left++;
            } else if (total > 0) {
                right--;
            } else {
                res.push([sorted[i], sorted[left], sorted[right]]);
                left++;
                while (left < right && sorted[left] === sorted[left - 1]) {
                    left++;
                }
                while (left < right && sorted[right] === sorted[right + 1]) {
                    right--;
                }
            }
        }   
    }
    return res;
};