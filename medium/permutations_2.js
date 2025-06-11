// Subsets II - Medium
// 
// Problem Description:
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets and can be returned in any order.
// 
// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Explanation: The unique subsets are generated, avoiding duplicates like [1,2] repeated.
// 
// Example 2:
// Input: nums = [0]
// Output: [[],[0]]
// 
// Example 3:
// Input: nums = [1]
// Output: [[],[1]]
// 
// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// nums may contain duplicates.
// 
// Approach:
// Use backtracking with sorting to generate subsets and skip duplicates by checking consecutive elements.
// 
// Time Complexity: O(2^n * n) for generating and sorting subsets, where n is the length of nums.
// Space Complexity: O(2^n * n) for storing the result sets.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = [];
        let current = [];
        nums = nums.sort((a, b) => a - b);

        function backtrack(start) {
            result.push([...current]);

            for (let i = start; i < nums.length; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;

                current.push(nums[i]);
                backtrack(i + 1);
                current.pop();
            }
        }

        backtrack(0);
        return result;
    }
}