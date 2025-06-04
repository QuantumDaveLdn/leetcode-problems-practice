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

// Invert Binary Tree - Easy
// 
// Problem Description:
// Given the root of a binary tree, invert the tree and return its root.
// 
// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Explanation: The tree is inverted by swapping left and right subtrees.
// 
// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]
// Explanation: The tree is inverted accordingly.
// 
// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// 0 <= Node.val <= 1000
// 
// Approach (Recursion):
// Recursively swap the left and right children of each node in the tree.
// 
// Time Complexity: O(n) where n is the number of nodes in the tree.
// Space Complexity: O(h) where h is the height of the tree due to the recursion stack.

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) {
            return root;
        }

        let temp = root.left;
        root.left = this.invertTree(root.right);
        root.right = this.invertTree(temp);

        return root; 
    }
}