/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Merge Two Sorted Lists - Easy
// 
// Problem Description:
// Given the heads of two sorted linked lists, merge them into one sorted linked list and return the head of the merged list. The merged list should be made by splicing together the nodes of the two input lists.
// 
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4]
// 
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// 
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
// 
// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
// 
// Approach (Iterative):
// Use a dummy node to build the merged list, compare nodes from both lists iteratively, and append the smaller value to the new list until one list is exhausted, then append the remainder of the other list.
// 
// Time Complexity: O(n + m) - where n and m are the lengths of the two lists, as we traverse both lists once.
// Space Complexity: O(1) - excluding the space for the output list, as we only use a few extra nodes.

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let merged = new ListNode();
        let current = merged;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        current.next = list1 || list2;
        merged = merged.next;
        return merged;
    }
}