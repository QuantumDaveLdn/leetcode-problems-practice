// Container With Most Water - Medium
// 
// Problem Description:
// You are given an integer array height of length n. There are n vertical lines
// drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container that can hold the most water.
// Return the maximum amount of water a container can store.
// 
// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.
//
// Example 2:
// Input: height = [1,1]
// Output: 1
//
// Constraints:
// n == height.length
// 2 <= n <= 10^5
// 0 <= height[i] <= 10^4
//
// Approach (Two Pointers):
// Use two pointers starting from both ends of the array.
// Calculate area using the shorter height (water level constrained by shorter wall).
// Move the pointer with the smaller height inward to potentially find a larger area.
// Continue until pointers meet.
//
// Time Complexity: O(n) - single pass through the array
// Space Complexity: O(1) - only using constant extra space

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        // Calculate area: water height is limited by shorter wall
        // Width is the distance between the two pointers
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        
        // Move the pointer with smaller height inward
        // Moving the taller one would only decrease width without potential for greater height
        height[left] < height[right] ? left++ : right--;
    }
    
    return maxArea;
};