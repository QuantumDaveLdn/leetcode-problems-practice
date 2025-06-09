// Combination Sum - Medium
// 
// Problem Description:
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the candidate numbers sum to target. You may return the combinations in any order.
// 
// Example 1:
// Input: candidates = [2,3,5,6], target = 7
// Output: [[2,2,3],[7]]
// Explanation: The combinations that sum up to 7 are [2,2,3] and [7].
// 
// Example 2:
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[2,6],[3,5]]
// 
// Example 3:
// Input: candidates = [2], target = 1
// Output: []
// 
// Constraints:
// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40
// 
// Approach:
// Use backtracking to explore all possible combinations that sum up to the target.
// 
// Time Complexity: O(S^T) where S is the number of candidates and T is the target, due to backtracking.
// Space Complexity: O(T) for the recursion stack.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const current = [];

        function backtrack(target, start) {
            if (target === 0) {
                result.push([...current]);
                return;
            }
            if (target < 0) {
                return;
            } 

            for (let i = start; i < nums.length; i++) {
                current.push(nums[i]);
                backtrack(target - nums[i], i);
                current.pop();
            }
        }

        backtrack(target, 0);
        return result;

    }
}