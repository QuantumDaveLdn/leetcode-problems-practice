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