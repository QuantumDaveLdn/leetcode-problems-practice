// Linked List Cycle - Easy
// 
// Problem Description:
// Given the head of a singly linked list, return true if there is a cycle in the linked list, otherwise return false. A cycle means a node can be reached again by continuously following the next pointer.
// 
// Example 1:
// Input: head = [3,2,0,-4], pos = 1 (where pos is the index of the node connected back, not part of input)
// Output: true
// 
// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// 
// Example 3:
// Input: head = [1], pos = -1 (no cycle)
// Output: false
// 
// Constraints:
// The number of nodes in the list is in the range [0, 10^4].
// -10^5 <= Node.val <= 10^5
// pos is -1 or a valid index in the linked list.
// 
// Approach (Floyd's Cycle Detection):
// Use two pointers, slow and fast; the slow pointer moves one step, and the fast pointer moves two steps. If there's a cycle, they will eventually meet.
// 
// Time Complexity: O(n) - where n is the number of nodes, as the algorithm traverses the list at most twice in the worst case.
// Space Complexity: O(1) - only a constant amount of space is used for pointers.

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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            if (slow === fast) {
                return true;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return false;
    }
}