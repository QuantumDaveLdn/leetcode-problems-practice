// Permutations - Medium
// 
// Problem Description:
// Given an array nums of distinct integers, return all possible permutations of the array.
// 
// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 
// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// 
// Example 3:
// Input: nums = [1]
// Output: [[1]]
// 
// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.
// 
// Approach:
// Use backtracking to generate all permutations by exploring each possible arrangement without repetition.
// 
// Time Complexity: O(n!), where n is the length of nums, as there are n! permutations.
// Space Complexity: O(n) for the recursion stack and storing the result.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let current = [];

        function backtrack() {
            if (current.length === nums.length) {
                result.push([...current]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (current.includes(nums[i])) continue;
                current.push(nums[i]);
                backtrack();
                current.pop();
            }
        }

        backtrack();
        return result;

    }
}