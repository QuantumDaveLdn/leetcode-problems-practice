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
    int size;
    int* array; // Prefix sum array
} NumArray;

NumArray* numArrayCreate(int* nums, int numsSize) {
    NumArray *newArray = (NumArray*)malloc(sizeof(NumArray));
    newArray->array = (int*)malloc((numsSize + 1) * sizeof(int));
    newArray->array[0] = 0;
    newArray->size = numsSize;
    
    // Build prefix sum array
    for (int i = 0; i < numsSize; i++) {
        newArray->array[i + 1] = newArray->array[i] + nums[i];
    }
    
    return newArray;
}

int numArraySumRange(NumArray* obj, int left, int right) {
    return obj->array[right + 1] - obj->array[left];
}

void numArrayFree(NumArray* obj) {
    free(obj->array);
    free(obj);
}
