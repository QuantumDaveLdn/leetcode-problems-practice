// Koko Eating Bananas - Medium
// 
// Problem Description:
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours. Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during that hour. Return the minimum integer k such that she can eat all the bananas within h hours.
// 
// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4
// 
// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 6
// 
// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 5
// 
// Constraints:
// 1 <= piles.length <= 10^4
// piles.length <= h <= 10^9
// 1 <= piles[i] <= 10^9
// 
// Approach (Binary Search):
// Perform binary search on the possible eating speeds from 1 to the maximum pile size, checking if Koko can eat all bananas within h hours for each mid value.
// 
// Time Complexity: O(n log m) where n is the number of piles and m is the maximum pile size
// Space Complexity: O(1) - No additional space used beyond a few variables

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles); 
        let output = 0;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            let total = 0;
            for (const pile of piles) {
                total += Math.ceil(pile / mid);
            }
            if (total <= h) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}