// Median of Two Sorted Arrays - Hard
//
// Problem Description:
// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
//
// Example:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.0
// Explanation: merged array = [1,2,3] and median is 2.
//
// Constraints:
// nums1.length == m, nums2.length == n
// 0 <= m <= 1000, 0 <= n <= 1000
// 1 <= m + n <= 2000
// -10^6 <= nums1[i], nums2[i] <= 10^6
//
// Approach:
// Merge two sorted arrays using two-pointer technique, then find median.
// This approach prioritizes simplicity over optimal time complexity.
//
// Time Complexity: O(m + n) - single pass through both arrays
// Space Complexity: O(m + n) - additional array to store merged result

#include <stdlib.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int totalSize = nums1Size + nums2Size;
    int *combined = (int*)malloc(sizeof(int) * totalSize);  // Allocate memory for merged array

    // Two-pointer merge of sorted arrays
    int i = 0;  // Pointer for nums1
    int j = 0;  // Pointer for nums2
    int count = 0;  // Index for combined array
    
    // Merge elements while both arrays have remaining elements
    while (i < nums1Size && j < nums2Size) {
        if (nums1[i] < nums2[j]) {
            combined[count++] = nums1[i++];  // Take smaller element from nums1
        } else {
            combined[count++] = nums2[j++];  // Take smaller element from nums2
        }
    }

    // Add remaining elements from nums1 (if any)
    while (i < nums1Size) {
        combined[count++] = nums1[i++];
    }

    // Add remaining elements from nums2 (if any)
    while (j < nums2Size) {
        combined[count++] = nums2[j++];
    }

    // Calculate median
    int mid = totalSize / 2;  // Middle index
    double result; 
    
    if (totalSize % 2 != 0) {
        // Odd length: median is middle element
        result = combined[mid];
    } else {
        // Even length: median is average of two middle elements
        result = (combined[mid - 1] + combined[mid]) / 2.0;  // Use 2.0 for float division
    }

    free(combined);  // Free allocated memory to prevent memory leak
    return result;
}