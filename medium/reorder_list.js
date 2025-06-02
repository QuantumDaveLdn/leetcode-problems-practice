/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Reorder List - Medium
// 
// Problem Description:
// Given a singly-linked list L: L0→L1→…→Ln-1→Ln, reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
// 
// Example 1:
// Input: [1,2,3,4]
// Output: [1,4,3,2]
// Explanation: The list is reordered by alternating elements from the first and second halves.
// 
// Constraints:
// The number of nodes in the list is in the range [1, 5 * 10^4].
// 1 <= Node.val <= 1000
// 
// Approach: Find the middle of the list using slow and fast pointers, reverse the second half, and merge the two halves alternately.
// 
// Time Complexity: O(n) where n is the number of nodes in the list.
// Space Complexity: O(1) as we modify the list in place without extra space.

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return; 

        let slow = head;
        let fast = head;
        let prev = null;
        
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        
        prev.next = null;  // Cut here first
        
        let prevSecond = null;
        let current = slow;
        
        while (current !== null) {
            let next = current.next;
            current.next = prevSecond;
            prevSecond = current;
            current = next;
        }
        
        let second = prevSecond;
        let first = head;
        let lastNode = null;
        
        while (first && second) {
            let temp1 = first.next;
            let temp2 = second.next;
            
            first.next = second;
            second.next = temp1;

            lastNode = second;
            first = temp1;
            second = temp2;
        }

        if (second && lastNode) {
            lastNode.next = second;
        }
    }
}