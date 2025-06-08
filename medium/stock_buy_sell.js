// Best Time to Buy and Sell Stock II - Medium
// 
// Problem Description:
// Given an array prices where prices[i] is the price of a given stock on the ith day, return the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
// 
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price=1) and sell on day 3 (price=5), profit = 4. Then buy on day 4 (price=3) and sell on day 5 (price=6), profit = 3. Total profit = 7.
// 
// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price=1) and sell on day 5 (price=5), profit = 4. (Multiple transactions possible, but this is optimal.)
// 
// Example 3:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: No transactions can be made as prices are decreasing.
// 
// Constraints:
// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4
// 
// Approach:
// Iterate through the array and add the profit from every consecutive price increase.
// 
// Time Complexity: O(n) where n is the length of prices.
// Space Complexity: O(1) as we only use a few variables.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
};