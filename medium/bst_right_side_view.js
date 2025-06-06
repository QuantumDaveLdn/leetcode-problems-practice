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

// Binary Tree Right Side View - Medium
// 
// Problem Description:
// Given the root of a binary tree, return the values of the nodes you can see ordered from top to bottom if you were standing on the right side of the tree.
// 
// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Explanation: From the right side, we see nodes 1, 3, and 4.
// 
// Example 2:
// Input: root = [1,null,3]
// Output: [1,3]
// Explanation: From the right side, we see nodes 1 and 3.
// 
// Example 3:
// Input: root = []
// Output: []
// Explanation: An empty tree has no nodes.
// 
// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
// 
// Approach:
// Use BFS (level order traversal) to process the tree level by level and add the last node of each level to the result array.
// 
// Time Complexity: O(n) where n is the number of nodes in the tree.
// Space Complexity: O(n) for the queue and result array.
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) {
            return [];
        }

        let queue = [root];
        let res = [];

        while (queue.length > 0) {
            let levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift();

                if (i === levelSize - 1) {
                    res.push(node.val);
                }

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right); 
            }
        }

        return res;
    }
}