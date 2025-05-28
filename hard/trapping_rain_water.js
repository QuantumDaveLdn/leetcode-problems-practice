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
 * Approach (Dynamic Programming):
 * Use two arrays to track the maximum height from the left and right for each bar, then calculate the trapped water as the minimum of these two minus the bar's height.
 * 
 * Time Complexity: O(n) - Two passes through the array
 * Space Complexity: O(n) - For the additional arrays used
 */
class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        const leftHeight = new Array(n).fill(0);
        const rightHeight = new Array(n).fill(0);
        const difference = new Array(n).fill(0);
        let maxHeightLeft = 0;

        for (let i = 0; i < leftHeight.length; i++) {
            if (i === 0) {
                leftHeight[i] = 0;
                continue;
            }
            maxHeightLeft = Math.max(height[i - 1], maxHeightLeft);
            leftHeight[i] = maxHeightLeft;
        }
        console.log(leftHeight);

        let maxHeightRight = 0;

        for (let i = n - 1; i >= 0; i--) {
            if (i === n - 1) {
                rightHeight[i] = 0;
                continue;
            }
            maxHeightRight = Math.max(height[i + 1], maxHeightRight);
            rightHeight[i] = maxHeightRight;
        }
        console.log(rightHeight);

        for (let i = 0; i < difference.length; i++) {
            difference[i] = Math.min(leftHeight[i], rightHeight[i]);
        }
        console.log(difference);

        let output = 0;
        for (let i = 0; i < height.length; i++) {
            output += difference[i] - height[i] < 0 ? 0 : difference[i] - height[i];
        }

        return output;
    }

}