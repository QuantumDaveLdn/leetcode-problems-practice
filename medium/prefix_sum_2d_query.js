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