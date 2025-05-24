// 2D Range Sum Query - Immutable - Medium
//
// Problem Description:
// Given a 2D matrix, handle multiple queries of the following type:
// Calculate the sum of elements inside the rectangle defined by its 
// upper left corner (row1, col1) and lower right corner (row2, col2).
//
// Example:
// Matrix: [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]
// sumRegion(2,1,4,3) = 8 (sum of rectangle from (2,1) to (4,3))
//
// Constraints:
// - m == matrix.length, n == matrix[i].length
// - 1 <= m, n <= 200
// - -10^5 <= matrix[i][j] <= 10^5
// - At most 10^4 calls to sumRegion
//
// Approach:
// Build a 2D prefix sum array where prefixSum[i][j] represents the sum of all
// elements from (0,0) to (i-1,j-1). Use 1-based indexing to avoid boundary checks.
// For any rectangle query, use inclusion-exclusion principle:
// result = bottomRight - top - left + topLeft
//
// Time Complexity:
// - Constructor: O(m*n) - build prefix sum array
// - sumRegion: O(1) - constant time lookup
// Space Complexity: O(m*n) - store prefix sum matrix

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        this.prefixSum = [];
        return;
    }

    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    this.prefixSum = Array(ROWS + 1).fill(0).map(() => Array(COLS + 1).fill(0));

    for (let i = 0; i < ROWS; i++) {
        let prefix = 0;
        for (let j = 0; j < COLS; j++) {
            const above = this.prefixSum[i][j + 1]
            prefix += matrix[i][j];
            this.prefixSum[i + 1][j + 1] = prefix + above; 
        }
    }

    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    row1 = row1 + 1;
    col1 = col1 + 1;
    row2 = row2 + 1;
    col2 = col2 + 1;

    const bottomRight = this.prefixSum[row2][col2];
    const top = this.prefixSum[row1 - 1][col2];
    const left = this.prefixSum[row2][col1 - 1];
    const topLeft = this.prefixSum[row1 - 1][col1 - 1];

    return bottomRight - top - left + topLeft;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */