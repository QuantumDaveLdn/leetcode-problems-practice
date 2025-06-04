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

// Maximum Depth of Binary Tree - Easy
//
// Problem Description:
// Given the root of a binary tree, return its maximum depth, which is the number of nodes along the longest path from the root node down to the farthest leaf node.
//
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Explanation: The longest path is from root to the leaf node 15 or 7, which has a depth of 3.
//
// Example 2:
// Input: root = [1,null,2]
// Output: 2
// Explanation: The longest path is from root to the leaf node 2, which has a depth of 2.
//
// Constraints:
// The number of nodes in the tree is in the range [0, 10^4].
// -100 <= Node.val <= 100
//
// Approach (Recursion):
// Recursively calculate the depth of the left and right subtrees and return the maximum depth plus one for the current node.
//
// Time Complexity: O(n) where n is the number of nodes in the tree.
// Space Complexity: O(h) where h is the height of the tree due to the recursion stack.

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (!root) {
            return 0;
        }

        let leftD = this.maxDepth(root.left);
        let rightD = this.maxDepth(root.right);

        return Math.max(leftD, rightD) + 1;
    }
}