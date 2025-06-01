// Reverse Linked List - Easy
// 
// Problem Description:
// Given the head of a singly linked list, reverse the list and return the head of the reversed list.
// 
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// 
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// 
// Example 3:
// Input: head = []
// Output: []
// 
// Constraints:
// The number of nodes in the list is in the range [0, 5000].
// -5000 <= Node.val <= 5000
// 
// Approach (Iterative):
// Use three pointers to reverse the list iteratively: traverse the list, and for each node, reverse the 'next' pointer while keeping track of the previous node.
// 
// Time Complexity: O(n) - where n is the number of nodes, as we visit each node once.
// Space Complexity: O(1) - only a few extra variables are used.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;

        while (current !== null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}