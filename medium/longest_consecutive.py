# Longest Consecutive Sequence - Medium
# 
# Problem Description:
# Given an unsorted array of integers nums, return the length of the longest 
# consecutive elements sequence. You must write an algorithm that runs in O(n) time.
# 
# Example 1:
# Input: nums = [100,4,200,1,3,2]
# Output: 4
# Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
#
# Example 2:
# Input: nums = [0,3,7,2,5,8,4,6,0,1]
# Output: 9
# Explanation: The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Therefore its length is 9.
#
# Constraints:
# 0 <= nums.length <= 10^5
# -10^9 <= nums[i] <= 10^9
#
# Approach (Hash Set):
# Use a set for O(1) lookups. For each number, check if it's the start of a sequence
# (i.e., no num-1 exists). If so, count consecutive numbers upward. Track the maximum length.
#
# Time Complexity: O(n) - each number is visited at most twice
# Space Complexity: O(n) - set storage

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest = 0
        setNums = set(nums)
        
        for num in nums:
            if (num - 1) not in setNums:  # Check if it's the start of a sequence
                length = 1
                currentNum = num
                
                while (currentNum + 1) in setNums:  # Count consecutive numbers upward
                    length += 1
                    currentNum += 1
                
                longest = max(longest, length)  # Update the maximum length
        
        return longest