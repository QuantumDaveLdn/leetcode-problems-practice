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

// Same Tree - Easy
// 
// Problem Description:
// Given the roots of two binary trees p and q, return true if the two trees are identical, and false otherwise.
// 
// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Explanation: Both trees have the same structure and node values.
// 
// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false
// Explanation: The trees have different structures.
// 
// Constraints:
// The number of nodes in both trees is in the range [0, 100].
// -10^4 <= Node.val <= 10^4
// 
// Approach (Recursion):
// Recursively check if the values of the nodes are the same and their subtrees are identical.
// 
// Time Complexity: O(n) where n is the number of nodes in the trees.
// Space Complexity: O(h) where h is the height of the trees due to the recursion stack.

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true;

        if (!p || !q) return false;

        if (p.val !== q.val) return false;

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}