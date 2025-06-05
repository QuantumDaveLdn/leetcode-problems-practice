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

// Subtree of Another Tree - Easy
// 
// Problem Description:
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// 
// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Explanation: The subtree rooted at node 4 matches subRoot.
// 
// Example 2:
// Input: root = [3,4,5,1,2], subRoot = [3,1]
// Output: false
// Explanation: No subtree of root matches subRoot.
// 
// Constraints:
// The number of nodes in the trees is in the range [1, 2000].
// -10^4 <= Node.val <= 10^4
// 
// Approach:
// Recursively traverse the root tree and check if any subtree matches the subRoot using a helper function to compare trees.
// 
// Time Complexity: O(m*n) where m and n are the sizes of the root and subRoot trees, respectively, due to checking subtrees.
// Space Complexity: O(h) where h is the height of the tree due to the recursion stack.
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return false;

        return this.isSame(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSame(p, q) {
        if (!p && !q) return true;

        if (!p || !q) return false;

        return p.val === q.val && this.isSame(p.left, q.left) && this.isSame(p.right, q.right);
    }
}