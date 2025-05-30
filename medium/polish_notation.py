# Evaluate Reverse Polish Notation - Medium
# 
# Problem Description:

from typing import List
# You are given an array of strings `tokens` that represents a valid arithmetic expression
# in Reverse Polish Notation. Evaluate and return the integer that represents the 
# evaluation of the expression.
# 
# Example 1:
# Input: tokens = ["1","2","+","3","*"]
# Output: 9
# Explanation: ((1 + 2) * 3) = 9
#
# Example 2:
# Input: tokens = ["4","13","5","/","+"]
# Output: 6
# Explanation: (4 + (13 / 5)) = (4 + 2) = 6
#
# Constraints:
# 1 <= tokens.length <= 1000
# tokens[i] is either an operator or an integer in range [-200, 200]
#
# Approach (Stack):
# Process tokens from left to right. Push numbers onto the stack. When encountering an operator,
# pop two operands, perform the operation, and push the result back onto the stack. 
# The final result will be at the top of the stack.
#
# Time Complexity: O(n) - Single pass through the tokens
# Space Complexity: O(n) - Stack can hold up to n/2 operands

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        output = 0

        if len(tokens) == 1:
            return int(tokens[0]) 

        for token in tokens:
            if token not in ["+", "-", "*", "/"]:
                stack.append(token)
            else:
                b = int(stack.pop())
                a = int(stack.pop())

                if token == "+":
                    stack.append(a + b)
                elif token == "-":
                    stack.append(a - b)
                elif token == "*":
                    stack.append(a * b)
                elif token == "/":
                    stack.append(int(a / b))
        
        output = stack[0]
        return output