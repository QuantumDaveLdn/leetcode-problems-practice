// Longest Consecutive Sequence - Medium
// 
// Problem Description:
// Given an unsorted array of integers nums, return the length of the longest 
// consecutive elements sequence. You must write an algorithm that runs in O(n) time.
// 
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
//
// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
//
// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
//
// Approach (Hash Set):
// Use a Set for O(1) lookups. For each number, check if it's the start of a sequence
// (no num-1 exists). If so, count consecutive numbers upward. Track the maximum length.
//
// Time Complexity: O(n) - each number is visited at most twice
// Space Complexity: O(n) - Set storage

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Convert to Set for O(1) lookup time
        const setNums = new Set(nums);
        let longest = 0;
        
        for (const num of nums) {
            // Only start counting if this is the beginning of a sequence
            // (no predecessor exists)
            if (!setNums.has(num - 1)) {
                let length = 1;
                let currentNum = num;
                
                // Count consecutive numbers upward
                while (setNums.has(currentNum + 1)) {
                    length++;
                    currentNum++;
                }
                
                // Update maximum length found
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}