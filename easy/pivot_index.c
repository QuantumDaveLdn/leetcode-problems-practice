#include <stdio.h>
#include <stdlib.h>

int pivotIndex(int* nums, int numsSize) {
    int* prefixSum = (int*)malloc((numsSize + 1) * sizeof(int));
    if (prefixSum == NULL) {
        return -1;
    }

    prefixSum[0] = 0;
    for (int i = 0; i < numsSize; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }


    for (int i = 0; i < numsSize; i++) {
        int leftSum = prefixSum[i];
        int rightSum = prefixSum[numsSize] - prefixSum[i + 1];

        if (leftSum == rightSum) {
            free(prefixSum);
            return i;
        }
    }
    free(prefixSum);
    return -1;
}