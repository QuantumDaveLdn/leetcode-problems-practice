/*
 * Trapping Rain Water - Hard
 * 
 * Problem Description:
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * 
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The trapped water is 6 units.
 * 
 * Example 2:
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 * Explanation: The trapped water is 9 units.
 * 
 * Constraints:
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 * 
 * Approach (Two Pointers):
 * Use two pointers starting from both ends of the array, moving the pointer with the smaller height inward and calculating trapped water based on the minimum of the maximum heights seen so far.
 * 
 * Time Complexity: O(n) - Single pass through the array with two pointers
 * Space Complexity: O(1) - Only a few variables are used
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0; 
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let output = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                output += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                output += rightMax - height[right];
            }
            right--;
        }
    }

    return output;
};