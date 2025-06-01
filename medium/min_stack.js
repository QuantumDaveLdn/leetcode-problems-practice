// Min Stack - Easy
// 
// Problem Description:
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// 
// Example 1:
// Input: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"]
//       [[], [-2], [0], [-3], [], [], [], []]
// Output: [null, null, null, null, -3, null, 0, -2]
// Explanation: MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3); minStack.getMin(); // return -3 minStack.pop(); minStack.top(); // return 0 minStack.getMin(); // return -2
// 
// Example 2:
// Input: Various operations as above.
// Output: As per stack operations.
// 
// Constraints:
// -2^31 <= val <= 2^31 - 1
// Methods called at most 3 * 10^4 times.
// 
// Approach (Auxiliary Stack):
// Use a main stack to store all elements and an auxiliary stack to keep track of minimum values, ensuring each operation is O(1) by pushing the current minimum onto the auxiliary stack with each push.
// 
// Time Complexity: O(1) for push, pop, top, and getMin operations.
// Space Complexity: O(n) - where n is the number of elements, due to the auxiliary stack.

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.size = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.size] = val;
        this.size++;
        const currentMin = this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1];
        this.minStack.push(Math.min(currentMin, val));
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.size === 0) {
            return false;
        }

        const value = this.stack[this.size - 1];
        this.stack.splice(this.size - 1, 1);
        this.size--;
        this.minStack.splice(this.minStack.length - 1, 1);
        return value;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.size - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}