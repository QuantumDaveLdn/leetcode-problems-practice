/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// Count Good Nodes in Binary Tree - Medium
// 
// Problem Description:
// Given the root of a binary tree, return the number of good nodes in the binary tree. A node is good if the path from the root to that node has no node with a greater value.
// 
// Example 1:
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes with values 3, 1, 4, and 5 are good (paths: root to 3, root to 1, root to 4, and root to 5).
// 
// Example 2:
// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Nodes with values 3, 3, and 4 are good.
// 
// Example 3:
// Input: root = [1]
// Output: 1
// Explanation: The single node is good.
// 
// Constraints:
// The number of nodes in the tree is in the range [1, 10^5].
// Each node's value is in the range [-10^4, 10^4].
// 
// Approach:
// Use DFS to traverse the tree while keeping track of the maximum value encountered so far on the path from the root, and increment a counter when a node is good.
// 
// Time Complexity: O(n) where n is the number of nodes in the tree.
// Space Complexity: O(h) where h is the height of the tree due to the recursion stack.
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let count = 0;
        let maxVal = root.val;

        function counting(node, maxVal) {
            if (!node) {
                return;
            }

            if (node.val >= maxVal) count++; 

            maxVal = Math.max(maxVal, node.val);

            counting(node.left, maxVal);
            counting(node.right, maxVal);
        }

        counting(root, maxVal);
        return count;
    }
}