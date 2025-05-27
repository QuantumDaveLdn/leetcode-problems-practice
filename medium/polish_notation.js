// Evaluate Reverse Polish Notation - Medium
// 
// Problem Description:
// You are given an array of strings tokens that represents a valid arithmetic expression
// in Reverse Polish Notation. Evaluate and return the integer that represents the 
// evaluation of the expression.
// 
// Example 1:
// Input: tokens = ["1","2","+","3","*"]
// Output: 9
// Explanation: ((1 + 2) * 3) = 9
//
// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = (4 + 2) = 6
//
// Constraints:
// 1 <= tokens.length <= 1000
// tokens[i] is either an operator or an integer in range [-200, 200]
//
// Approach (Stack):
// Process tokens left to right. Push numbers onto stack. When encountering an operator,
// pop two operands, perform operation, and push result back. Final result is stack top.
//
// Time Complexity: O(n) - single pass through tokens
// Space Complexity: O(n) - stack can hold up to n/2 operands

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        
        for (let token of tokens) {
            // Check if token is an operator
            if (["+", "-", "*", "/"].includes(token)) {
                // Pop two operands (order matters for - and /)
                const b = stack.pop();  // Second operand
                const a = stack.pop();  // First operand
                
                // Perform operation and push result
                switch (token) {
                    case "+": stack.push(a + b); break;
                    case "-": stack.push(a - b); break;
                    case "*": stack.push(a * b); break;
                    case "/": stack.push(Math.trunc(a / b)); break; // Truncate toward zero
                }
            } else {
                // Token is a number, push to stack
                stack.push(parseInt(token));
            }
        }
        
        // Final result is the only element left in stack
        return stack[0];
    }
}