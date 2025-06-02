// Longest Repeating Character Replacement - Medium
//
// Problem Description:
// Given a string s that consists of only uppercase English letters, return the length of the longest substring that can be made up of at most k changes to make all characters the same.
//
// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with 'B's or vice versa to get "BBBB" or "AAAA".
//
// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'B' in the substring "AABA" to get "AAAA".
//
// Constraints:
// 1 <= s.length <= 10^5
// 0 <= k <= s.length
// s consists of only uppercase English letters.
//
// Approach (Sliding Window with Hash Map):
// Use a sliding window to maintain the current substring, track the frequency of characters with a hash map, and adjust the window to ensure the number of replacements needed (window length minus the maximum frequency) does not exceed k, updating the maximum length accordingly.
//
// Time Complexity: O(n) where n is the length of the string, as we traverse the string once.
// Space Complexity: O(1) since the hash map size is bounded by the number of uppercase letters (26).
//
// ... existing code ...

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        const hashMap = {};
        let longest = 0;
        let maxValue = 0;

        for (let right = 0; right < s.length; right++) {
            hashMap[s[right]] = (hashMap[s[right]] || 0) + 1;
            maxValue = Math.max(maxValue, hashMap[s[right]]); 
            while (right - left + 1 - maxValue > k) {
                hashMap[s[left]]--;
                left++; 
            }
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }
}