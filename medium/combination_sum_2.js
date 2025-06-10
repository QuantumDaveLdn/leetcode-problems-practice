// Combination Sum II - Medium
// 
// Problem Description:
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.
// 
// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]
// Explanation: The unique combinations that sum up to 8 are as listed.
// 
// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output: [[1,2,2],[5]]
// 
// Example 3:
// Input: candidates = [1], target = 1
// Output: [[1]]
// 
// Constraints:
// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// All numbers in candidates are unique in the context of combinations.
// 1 <= target <= 30
// 
// Approach:
// Use backtracking with sorting to explore combinations, skipping duplicates to ensure uniqueness.
// 
// Time Complexity: O(2^T) in the worst case, where T is the target, due to backtracking with subsets.
// Space Complexity: O(T) for the recursion stack and sorting.

class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        const current = [];
        candidates = candidates.sort((a, b) => a - b);

        function backtracking(target, start) {
            if (target === 0) {
                result.push([...current]);
                return;
            }
            if (target < 0) {
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) continue;
                current.push(candidates[i]);
                backtracking(target - candidates[i], i + 1);
                current.pop();
            }
        }

        backtracking(target, 0);
        return result;
    }
}