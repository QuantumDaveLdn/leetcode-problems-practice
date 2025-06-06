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

// Binary Tree Level Order Traversal - Medium
// 
// Problem Description:
// Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).
// 
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Explanation: The tree has three levels: root at level 0, its children at level 1, and so on.
// 
// Example 2:
// Input: root = [1]
// Output: [[1]]
// Explanation: A single node tree has one level.
// 
// Example 3:
// Input: root = []
// Output: []
// Explanation: An empty tree has no levels.
// 
// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000
// 
// Approach:
// Use DFS to traverse the tree and build the result array level by level, adding node values to the appropriate level index.
// 
// Time Complexity: O(n) where n is the number of nodes in the tree.
// Space Complexity: O(n) for storing the result and the recursion stack.
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];

        function dfs(node, level) {
            if (!node) {
                return [];
            }

            if (res[level]) {
                res[level].push(node.val);
            } else {
                res[level] = [node.val];
            }

            dfs(node.left, level+1);
            dfs(node.right, level+1);
        }

        dfs(root, 0);
        return res;
    }
}