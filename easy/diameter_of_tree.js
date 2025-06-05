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

// Diameter of Binary Tree - Easy
// 
// Problem Description:
// Given the root of a binary tree, return the length of the diameter of the tree, which is the longest path between any two nodes.
// 
// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: The longest path is between nodes 4 and 5, passing through 2, with a length of 3 edges.
// 
// Example 2:
// Input: root = [1,2]
// Output: 1
// Explanation: The longest path is between nodes 1 and 2, with a length of 1 edge.
// 
// Constraints:
// The number of nodes in the tree is in the range [1, 10^4].
// -100 <= Node.val <= 100
// 
// Approach (Depth-First Search):
// Traverse the tree using DFS to calculate the height of each subtree and update the diameter as the maximum sum of left and right heights for any node.
// 
// Time Complexity: O(n) where n is the number of nodes in the tree.
// Space Complexity: O(h) where h is the height of the tree due to the recursion stack.

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let longest = 0;
        function height(node) {
            if (!node) {
                return 0;
            }

            let leftD = height(node.left);
            let rightD = height(node.right);

            longest = Math.max(longest, leftD + rightD);

            return Math.max(leftD, rightD) + 1;
        }

        height(root);
        return longest;
    }
}