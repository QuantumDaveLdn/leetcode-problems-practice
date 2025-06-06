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

// Kth Smallest Element in a BST - Medium
// 
// Problem Description:
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the BST.
// 
// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Explanation: The inorder traversal is [1,2,3,4], so the 1st smallest is 1.
// 
// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
// Explanation: The inorder traversal is [1,2,3,4,5,6], so the 3rd smallest is 3.
// 
// Constraints:
// The number of nodes in the tree is in the range [1, 10^4].
// -10^4 <= Node.val <= 10^4
// 1 <= k <= the number of nodes in the tree
// 
// Approach:
// Perform an inorder traversal of the BST to get the nodes in sorted order and keep a counter to find the kth element.
// 
// Time Complexity: O(n) where n is the number of nodes in the tree, as we may traverse the entire tree.
// Space Complexity: O(h) where h is the height of the tree due to the recursion stack.
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let result = null;

        function inorder(node) {
            if (!node || result !== null) {
                return;
            }

            inorder(node.left);
            count++;
            if (count === k) {
                result = node.val;
                return;
            }

            inorder(node.right);
        }

        inorder(root);
        return result;
    }
}