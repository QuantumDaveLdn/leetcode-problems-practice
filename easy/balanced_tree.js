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

// Balanced Binary Tree - Easy
// 
// Problem Description:
// Given a binary tree, determine if it is height-balanced, meaning the absolute difference in heights of left and right subtrees of every node is not more than 1.
// 
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Explanation: The tree is balanced as all subtrees satisfy the condition.
// 
// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Explanation: The tree is not balanced due to the imbalance in subtrees.
// 
// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -10^4 <= Node.val <= 10^4
// 
// Approach (Recursion):
// Use a recursive function to calculate the height of each subtree and check if the difference in heights of left and right subtrees of every node is at most 1.
// 
// Time Complexity: O(n) where n is the number of nodes in the tree.
// Space Complexity: O(h) where h is the height of the tree due to the recursion stack.

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        function height(node) {
            if (!node) {
                return 0;
            }

            let leftD = height(node.left);
            let rightD = height(node.right);

            if (leftD === -1 || rightD === -1) {
                return -1;
            };

            if (Math.abs(leftD - rightD) > 1) {
                return -1;
            }

            return Math.max(leftD, rightD) + 1;
        }
        return height(root) !== -1;

    }
}