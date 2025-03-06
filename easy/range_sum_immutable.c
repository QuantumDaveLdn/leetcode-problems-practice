#include <stdlib.h>
#include <stdio.h>

// Range Sum Query - Immutable - Easy
//
// Problem Description:
// Given an integer array nums, handle multiple queries to calculate the sum
// of elements between indices left and right inclusive.
//
// Example:
// Input: ["NumArray", "sumRange", "sumRange", "sumRange"]
//        [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output: [null, 1, -1, -3]
//
// Constraints:
// 1 <= nums.length <= 10^4
// -10^5 <= nums[i] <= 10^5
// 0 <= left <= right < nums.length
// At most 10^4 calls to sumRange.
//
// Approach:
// Store the original array and calculate sums on demand by iterating through
// the specified range.
//
// Time Complexity:
// - numArrayCreate: O(n) - copying the array takes linear time
// - numArraySumRange: O(n) - linear scan of the array between left and right
// - numArrayFree: O(1) - constant time for freeing memory
// Space Complexity: O(n) - storing the array of integers

typedef struct {
    int* array;
    int size;
} NumArray;

NumArray* numArrayCreate(int* nums, int numsSize) {
    // Allocate memory for the NumArray structure
    NumArray *newNumArray = malloc(sizeof(NumArray));
    if (newNumArray == NULL) {
        return NULL;
    }
    
    // Allocate memory for the array field
    newNumArray->array = calloc(numsSize, sizeof(int));
    if (newNumArray->array == NULL) {
        free(newNumArray);
        return NULL;
    }
    
    // Set the size field
    newNumArray->size = numsSize;
    
    // Copy values from input array
    memcpy(newNumArray->array, nums, sizeof(int) * numsSize);
    
    return newNumArray;
}

int numArraySumRange(NumArray* obj, int left, int right) {
    // Calculate sum between left and right indices (inclusive)
    int result = 0;
    for (int i = left; i <= right; i++) {
        result += obj->array[i];
    }
    
    return result;
}

void numArrayFree(NumArray* obj) {
    // Free the array memory
    free(obj->array);
    
    // Free the NumArray structure
    free(obj);
}