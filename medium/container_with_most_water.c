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

int maxArea(int* height, int heightSize) {
    int left = 0; 
    int right = heightSize - 1;
    int maxArea = 0; 

    while (left != right) {
        int min = height[left] < height[right] ? height[left] : height[right];
        int area = min * (right - left);

        maxArea = maxArea > area ? maxArea : area;  

        height[left] <= height[right] ? left++ : right--;
    }

    return maxArea;

}