from typing import List

# Group Anagrams - Medium
#
# Problem Description:
# Given an array of strings strs, group the anagrams together.
# You can return the answer in any order.
#
# Example:
# Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
# Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
#
# Constraints:
# 1 <= strs.length <= 10^4
# 0 <= strs[i].length <= 100
# strs[i] consists of lowercase English letters only.
#
# Approach:
# Use a sorted string as the key to group anagrams. All anagrams will have
# the same sorted character sequence (e.g., "eat" and "tea" both become "aet").
#
# Time Complexity: O(n * k log k), where n = number of strings, k = max string length.
# Space Complexity: O(n * k) for storing all strings in the hash map.


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashMap = {}

        for string in strs:
            key = "".join(sorted(string))  

            if key not in hashMap:
                hashMap[key] = []
            hashMap[key].append(string)
        
        return list(hashMap.values())