/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Linked List Cycle II - Medium
// 
// Problem Description:
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// 
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: The node with value 2
// Explanation: There is a cycle in the linked list where the tail connects to the second node.
// 
// Example 2:
// Input: head = [1,2], pos = 0
// Output: The node with value 1
// Explanation: The tail connects to the first node, creating a cycle.
// 
// Example 3:
// Input: head = [1], pos = -1
// Output: null
// Explanation: There is no cycle in the linked list.
// 
// Constraints:
// The number of nodes in the list is in the range [0, 10^4].
// -10^5 <= Node.val <= 10^5
// pos is -1 or a valid index in the linked list.
// 
// Approach:
// Use Floyd's cycle detection algorithm with two pointers to detect the cycle, then find the entry point by moving one pointer back to the head and advancing both at the same speed.
// 
// Time Complexity: O(n) where n is the number of nodes in the list.
// Space Complexity: O(1) as we only use a constant amount of space.
var detectCycle = function(head) {

    if (!head) return null;
    if (!head.next) return null;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            slow = head;
            
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};