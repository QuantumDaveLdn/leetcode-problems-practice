# Encode and Decode Strings - Medium
# 
# Problem Description:
# Design an algorithm to encode a list of strings to a string and decode
# the string back to the original list of strings.
# 
# Example 1:
# Input: strs = ["hello","world"]
# Output: "5#hello5#world"
# Decoded: ["hello","world"]
# 
# Example 2:
# Input: strs = [""]
# Output: "0#"
# Decoded: [""]
#
# Constraints:
# 0 <= strs.length <= 200
# 0 <= strs[i].length <= 200
# strs[i] contains any possible characters out of 256 valid ASCII characters.
#
# Approach (Length Prefixing):
# Encode: For each string, prepend its length followed by '#' delimiter
# Decode: Parse length, skip delimiter, extract exact number of characters
#
# Time Complexity: O(n) - where n is total characters across all strings
# Space Complexity: O(n) - for the encoded string and result list

from typing import List

class Solution:
    
    def encode(self, strs: List[str]) -> str:
        res = ""
        for string in strs:
            # Format: length + delimiter + actual string
            res += str(len(string)) + "#" + string
        return res
    
    def decode(self, s: str) -> List[str]:
        i = 0
        res = []
        
        while i < len(s):
            # Find the '#' delimiter from current position
            indexHash = s.find("#", i)
            # Extract length (between current position and '#')
            length = int(s[i:indexHash])
            # Start of actual string is after the '#'
            start = indexHash + 1
            # Extract exact number of characters based on length
            res.append(s[start:start+length])
            # Move to start of next encoded string
            i = length + start
        
        return res