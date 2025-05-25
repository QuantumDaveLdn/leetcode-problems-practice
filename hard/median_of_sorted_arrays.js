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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0; 
    let j = 0; 
    const merged = [];
    const n1 = nums1.length;
    const n2 = nums2.length;

    while (i < n1 && j < n2) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    
    while (i < n1) {
        merged.push(nums1[i]);
        i++; 
    }

    while (j < n2) {
        merged.push(nums2[j]);
        j++;
    }

    const length = merged.length;
    const mid = Math.floor(length / 2);

    if (length % 2 !== 0) {
        return merged[mid];
    } else {
        return (merged[mid] + merged[mid - 1]) / 2;
    }

};