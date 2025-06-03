// Remove Nth Node From End of List - Medium
//
// Problem Description:
// Given the head of a singly linked list, remove the nth node from the end of the list and return its head.
//
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Explanation: The second node from the end (node 4) is removed.
//
// Example 2:
// Input: head = [1], n = 1
// Output: []
// Explanation: The only node is removed.
//
// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
//
// Approach (Two Pointers):
// Use two pointers, fast and slow; move the fast pointer n steps ahead, then move both pointers until fast reaches the end, and remove the node after the slow pointer.
//
// Time Complexity: O(L) where L is the length of the list.
// Space Complexity: O(1) as we use a constant amount of extra space.

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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let slow = head;
        let fast = head;

        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        if (!fast) {
            return head.next;
        }

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;
        return head;

    }
}