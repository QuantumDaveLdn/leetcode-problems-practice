// Subsets - Medium
// 
// Problem Description:
// Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.
// 
// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Explanation: All possible subsets of [1,2,3] are returned.
// 
// Example 2:
// Input: nums = [0]
// Output: [[],[0]]
// Explanation: The only subset of [0] is [] and [0].
// 
// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.
// 
// Approach:
// Use backtracking to generate all possible subsets by including or excluding each element.
// 
// Time Complexity: O(2^n) where n is the length of nums, as there are 2^n possible subsets.
// Space Complexity: O(n) for the recursion stack and the current subset being built.
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const current = [];

        function backtrack(i) {
            if (i === nums.length) {
                result.push([...current]);
                return;
            }

            current.push(nums[i]);
            backtrack(i + 1);

            current.pop();
            backtrack(i + 1);
        }
        backtrack(0);
        return result;
    }
}