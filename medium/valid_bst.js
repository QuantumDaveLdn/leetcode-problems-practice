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

// Validate Binary Search Tree - Medium
// 
// Problem Description:
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// 
// Example 1:
// Input: root = [2,1,3]
// Output: true
// Explanation: The tree is a valid BST as 1 < 2 < 3.
// 
// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The tree is not a valid BST because 4 is not less than 5 in the right subtree.
// 
// Constraints:
// The number of nodes in the tree is in the range [1, 10^4].
// -2^31 <= Node.val <= 2^31 - 1
// 
// Approach:
// Use a recursive helper function to check if each node is within the valid BST range, updating the min and max bounds as we traverse.
// 
// Time Complexity: O(n) where n is the number of nodes in the tree.
// Space Complexity: O(h) where h is the height of the tree due to the recursion stack.
class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        function isValid(node, min, max) {
            if (!node) {
                return true;
            }

            if (node.val <= min || node.val >= max) {
                return false;
            }

            return isValid(node.left, min, node.val) && isValid(node.right, node.val, max);
            
        }

        return isValid(root, -Infinity, Infinity);
    }
}