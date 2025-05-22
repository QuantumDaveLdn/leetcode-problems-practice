# Valid Anagram - Easy
# 
# Problem Description:
# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An anagram is a string that contains the exact same characters as another string,
# but the order of the characters can be different.
# 
# Example 1:
# Input: s = "racecar", t = "carrace"
# Output: true
# 
# Example 2:
# Input: s = "jar", t = "jam"
# Output: false
#
# Constraints:
# s and t consist of lowercase English letters.
#
# Approach (Hash Map):
# Create a frequency counter object to track character occurrences.
# Increment counts for characters in s and decrement for characters in t.
# If all values in the counter are 0, the strings are anagrams.
#
# Time Complexity: O(n) - linear scan of both strings
# Space Complexity: O(k) - where k is the size of the character set (26 for lowercase English)

from typing import List

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hashMap = {}
        for char in s:
            hashMap[char] = hashMap.get(char, 0) + 1
        for char in t:
            hashMap[char] = hashMap.get(char, 0) - 1
        
        return all(value == 0 for value in hashMap.values())
