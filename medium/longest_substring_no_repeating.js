// Longest Substring Without Repeating Characters - Medium
// 
// Problem Description:
// Given a string s, find the length of the longest substring without repeating characters.
// 
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// 
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// 
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// 
// Constraints:
// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.
// 
// Approach (Sliding Window with Hash Map):
// Use a sliding window to track the current substring without repeating characters, maintaining a map to store the last index of each character, and update the maximum length as we iterate.
// 
// Time Complexity: O(n) where n is the length of the string, as we traverse the string once.
// Space Complexity: O(min(n, m)) where m is the size of the charset (e.g., 128 for ASCII).

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        const map = new Map();

        for (let right = 0; right < s.length; right++) {
            if (map.has(s[right]) && map.get(s[right]) >= left) {
                left = map.get(s[right]) + 1;
            }
            map.set(s[right], right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}