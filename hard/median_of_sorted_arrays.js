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
// Use binary search to find the correct partition of both arrays.
// This is the optimal solution with logarithmic time complexity.
//
// Time Complexity: O(log(min(m, n))) - binary search on the smaller array
// Space Complexity: O(1) - constant space usage

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            const temp = nums1;
            nums1 = nums2;
            nums2 = temp;
        }
        
        let left = 0;
        let right = nums1.length;
        
        while (left <= right) {
            let i = Math.floor((left + right) / 2);
            let j = Math.floor((nums1.length + nums2.length + 1) / 2 - i);

            const aLeft = i === 0 ? -Infinity : nums1[i - 1];
            const aRight = i === nums1.length ? Infinity : nums1[i];
            const bLeft = j === 0 ? -Infinity : nums2[j - 1];
            const bRight = j === nums2.length ? Infinity : nums2[j];

            if (aLeft <= bRight && bLeft <= aRight) {
                if ((nums1.length + nums2.length) % 2 !== 0) {
                    return Math.max(aLeft, bLeft);
                } else {
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
                }
            } else {
                if (aLeft > bRight) {
                    right = i - 1;
                } else {
                    left = i + 1;
                }
            }
        }
        
        return -1;
    }
}