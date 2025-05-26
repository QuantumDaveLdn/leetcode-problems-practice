# Valid Parentheses - Easy
# 
# Problem Description:
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
# determine if the input string is valid. An input string is valid if:
# 1. Open brackets must be closed by the same type of brackets.
# 2. Open brackets must be closed in the correct order.
# 3. Every close bracket has a corresponding open bracket of the same type.
# 
# Example 1:
# Input: s = "()"
# Output: true
# 
# Example 2:
# Input: s = "()[]{}"
# Output: true
#
# Example 3:
# Input: s = "(]"
# Output: false
#
# Constraints:
# 1 <= s.length <= 10^4
# s consists of parentheses only '()[]{}'.
#
# Approach (Stack):
# Use a stack to track opening brackets and a dictionary to map closing to opening brackets.
# For each character: if closing bracket, check if it matches the most recent opening bracket.
# If opening bracket, push to stack. String is valid if stack is empty at the end.
#
# Time Complexity: O(n) - single pass through the string
# Space Complexity: O(n) - stack can hold up to n/2 opening brackets

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        self.stack = []
        # Map closing brackets to their corresponding opening brackets
        self.dict = { "}": "{", ")": "(", "]": "[" }
        
        for char in s:
            # If it's a closing bracket
            if char in ["}", ")", "]"]:
                # Check if stack is empty (no matching opening bracket)
                if not self.stack:
                    return False
                # Pop the most recent opening bracket
                value = self.stack.pop()
                # Check if it matches the current closing bracket
                if self.dict[char] != value:
                    return False
            else:
                # It's an opening bracket, push to stack
                self.stack.append(char)
        
        # Valid if all brackets are matched (stack is empty)
        return len(self.stack) == 0