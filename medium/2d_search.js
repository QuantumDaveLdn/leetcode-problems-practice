// Problem Description:
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. The matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.
// 
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// 
// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
// 
// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10^4 <= matrix[i][j], target <= 10^4
// 
// Approach (Binary Search on 2D Array):
// Treat the 2D matrix as a 1D sorted array and perform binary search by calculating the equivalent row and column for the middle index.
// 
// Time Complexity: O(log(m * n)) - Binary search on the total elements
// Space Complexity: O(1) - No additional space used beyond a few variables

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
            return false;
        }

        const m = matrix.length;
        const n = matrix[0].length;
        let left = 0;
        let right = (m * n) - 1;


        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const row = Math.floor(mid / n);
            const col = mid % n;

            if (matrix[row][col] === target) {
                return true;
            } else if (matrix[row][col] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}
