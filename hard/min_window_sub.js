// Minimum Window Substring - Hard
// 
// Problem Description:
// Given two strings s and t, return the minimum window substring of s that contains all the characters in t. If there is no such substring, return an empty string.
// 
// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: "BANC" is the minimum window substring of s that contains all characters of t.
// 
// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// 
// Example 3:
// Input: s = "b", t = "a"
// Output: ""
// Explanation: There is no substring of s that contains all characters of t.
// 
// Constraints:
// 1 <= s.length, t.length <= 10^5
// s and t consist of English letters.
// 
// Approach:
// Use a sliding window with two pointers to find the smallest substring of s that contains all characters of t, using hash maps to track character counts.
// 
// Time Complexity: O(n) where n is the length of s, as we traverse the string a linear number of times.
// Space Complexity: O(1) since the character counters use a fixed amount of space relative to the alphabet size.
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left = 0;
        let output = "";
        const counter = {};
        const windowCounter = {};
        let remaining = 0;

        for (let i = 0; i < t.length; i++) {
            counter[t[i]] = (counter[t[i]] || 0) + 1;
        }

        remaining = Object.keys(counter).length;

        for (let right = 0; right < s.length; right++) {
            windowCounter[s[right]] = (windowCounter[s[right]] || 0) + 1;
            
            if (counter[s[right]] && windowCounter[s[right]] === counter[s[right]]) {
                remaining--;
            }

            if (remaining === 0) {
                while (remaining === 0) {
                    if (!output || right - left + 1 < output.length) {
                        output = s.substring(left, right + 1);
                    }
                    windowCounter[s[left]]--;
                    if (counter[s[left]] && windowCounter[s[left]] < counter[s[left]]) {
                        remaining++;
                    }
                    left++;
                }
            }   
        }

        return output;
    }
}