/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Add Two Numbers - Medium
// 
// Problem Description:
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// 
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// 
// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]
// Explanation: 0 + 0 = 0.
// 
// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
// Explanation: 9999999 + 9999 = 10009998.
// 
// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
// 
// Approach:
// Traverse both linked lists simultaneously, add corresponding digits along with any carry, and construct a new linked list with the result.
// 
// Time Complexity: O(max(m, n)) where m and n are the lengths of the input linked lists.
// Space Complexity: O(max(m, n)) for the new linked list.
class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let current = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;

            const total = v1 + v2 + carry;
            carry = Math.floor(total / 10);
            const val = total % 10;

            const newNode = new ListNode(val, null);
            current.next = newNode;
            current = current.next;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;

        }

        return dummy.next;
    }
}