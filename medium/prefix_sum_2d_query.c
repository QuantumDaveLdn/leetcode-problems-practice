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

#include <stdlib.h>
#include <stdio.h>

typedef struct {
    int** matrix;
    int colSize;
    int rows;
} NumMatrix;

NumMatrix* numMatrixCreate(int** matrix, int matrixSize, int* matrixColSize) {
    NumMatrix *newMatrix = (NumMatrix*)malloc(sizeof(NumMatrix));
    if (newMatrix == NULL) {
        return NULL;
    }
    
    newMatrix->colSize = matrixColSize[0];
    newMatrix->rows = matrixSize;
    newMatrix->matrix = (int**)calloc(matrixSize + 1, sizeof(int*));
    
    for (int i = 0; i <= matrixSize; i++) {
        newMatrix->matrix[i] = (int*)calloc(matrixColSize[0] + 1, sizeof(int));
    } // This closing brace was missing
    
    for (int i = 0; i < matrixSize; i++) {
        int prefix = 0;
        for (int j = 0; j < newMatrix->colSize; j++) {
            int above = newMatrix->matrix[i][j + 1];
            prefix += matrix[i][j];
            newMatrix->matrix[i+1][j+1] = prefix + above;
        }
    }
    
    return newMatrix;
}

int numMatrixSumRegion(NumMatrix* obj, int row1, int col1, int row2, int col2) {
    row1++;
    col1++;
    row2++;
    col2++;
    
    int bottomRight = obj->matrix[row2][col2];
    int top = obj->matrix[row1 - 1][col2];
    int left = obj->matrix[row2][col1 - 1];
    int topLeft = obj->matrix[row1 - 1][col1 - 1];
    
    return bottomRight - top - left + topLeft;
}

void numMatrixFree(NumMatrix* obj) {
    for (int i = 0; i <= obj->rows; i++) {
        free(obj->matrix[i]);
    }
    free(obj->matrix);
    free(obj);
}

/**
 * Your NumMatrix struct will be instantiated and called as such:
 * NumMatrix* obj = numMatrixCreate(matrix, matrixSize, matrixColSize);
 * int param_1 = numMatrixSumRegion(obj, row1, col1, row2, col2);
 
 * numMatrixFree(obj);
*/