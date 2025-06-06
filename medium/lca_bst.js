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

// Lowest Common Ancestor of a Binary Search Tree - Medium
// 
// Problem Description:
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
// 
// Example 1:
// Input: root = [6,2,8,0,4], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// 
// Example 2:
// Input: root = [6,2,8,0,4], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2.
// 
// Constraints:
// The number of nodes in the tree is in the range [2, 10^5].
// -10^9 <= Node.val <= 10^9
// All Node.val are unique.
// p != q
// p and q will exist in the BST.
// 
// Approach:
// Traverse the tree from the root; if both p and q values are greater than the current node, move to the right subtree; if both are smaller, move to the left subtree; otherwise, the current node is the LCA.
// 
// Time Complexity: O(h) where h is the height of the tree.
// Space Complexity: O(h) due to the recursion stack.
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root) {
            return null;
        }

        if (root.val === p.val || root.val === q.val) {
            return root;
        }

        let left = this.lowestCommonAncestor(root.left, p, q);
        let right = this.lowestCommonAncestor(root.right, p, q);

        if (left && right) {
            return root;
        } else if (left && !right) {
            return left;
        } else if (!left && right) {
            return right;
        } else {
            return null;
        }
    }
}