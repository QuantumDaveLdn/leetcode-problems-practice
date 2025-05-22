# Contains Duplicate - Easy
# 
# Problem Description:
# Given an integer array nums, return true if any value appears 
# more than once in the array, otherwise return false.
# 
# Example 1:
# Input: nums = [1, 2, 3, 3]
# Output: true
# 
# Example 2:
# Input: nums = [1, 2, 3, 4]
# Output: false
#
# Approach:
# Use a set data structure to store unique elements. Since sets only contain
# unique values, if the array length is greater than the set size, there must
# be duplicates.
#
# Time Complexity: O(n) - iterate through array once to create set
# Space Complexity: O(n) - set stores up to n unique elements

from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) > len(set(nums))