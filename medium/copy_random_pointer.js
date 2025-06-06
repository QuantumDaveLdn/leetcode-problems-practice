// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

// Copy List with Random Pointer - Medium
// 
// Problem Description:
// Given a linked list where each node contains a value, a next pointer to the next node, and a random pointer that can point to any node in the list or null, return a deep copy of the list.
// 
// Example 1:
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Explanation: The copied list should have the same structure and random pointers as the original.
// 
// Example 2:
// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Explanation: The random pointer of the second node points to the first node in both lists.
// 
// Example 3:
// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]
// 
// Constraints:
// The number of nodes n in the list is in the range [0, 3000].
// -10000 <= Node.val <= 10000
// Node.random is null or is a pointer to a node in the list.
// 
// Approach:
// First, create a copy of each node and insert it next to the original node, then update the random pointers of the copied nodes, and finally, separate the original and copied lists.
// 
// Time Complexity: O(n) where n is the number of nodes in the list.
// Space Complexity: O(1) excluding the space for the output, as we modify the list in-place.
class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let current = head;
        while (current) {
            const newNode = new Node(current.val, current.next, null);
            current.next = newNode;
            current = newNode.next;
        }

        current = head;
        while (current) {
            if (current.random) {
                current.next.random = current.random.next;
            }
            current = current.next.next;
        }

        let dummy = new Node(0, null, null);
        current = head;
        let newCurrent = dummy;

        while (current) {
            newCurrent.next = current.next;
            current.next = current.next.next;
            
            newCurrent = newCurrent.next;
            current = current.next;
        }
        return dummy.next;
    }
}