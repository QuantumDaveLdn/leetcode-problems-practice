// Best Time to Buy and Sell Stock - Easy
// 
// Problem Description:
// Given an array of prices where prices[i] is the price of a stock on the ith day, find the maximum profit that can be achieved by buying on one day and selling on a later day. If no profit can be made, return 0.
// 
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 5-1=5.
// 
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: Prices are decreasing, so no transaction yields profit.
// 
// Constraints:
// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4
// 
// Approach (One Pass):
// Track the minimum price seen so far and calculate the maximum profit at each step by subtracting the minimum price from the current price.
// 
// Time Complexity: O(n) - where n is the length of the prices array, as we make a single pass.
// Space Complexity: O(1) - only a few variables are used.

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                maxProfit = Math.max(maxProfit, prices[i] - minPrice);
            }
        }
        return maxProfit;
    }
}