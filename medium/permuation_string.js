// Permutation in String - Medium
// 
// Problem Description:
// Given two strings s1 and s2, return true if s1 is a substring of s2 (considering any permutation of s1 as a substring of s2) and false otherwise.
// 
// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains "ba", which is a permutation of s1.
// 
// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
// Explanation: s2 does not contain any permutation of s1 as a substring.
// 
// Constraints:
// 1 <= s1.length, s2.length <= 10^4
// s1 and s2 consist of lowercase English letters.
// 
// Approach:
// Use a sliding window of size s1.length on s2 to check if the window contains a permutation of s1 by maintaining a character count.
// 
// Time Complexity: O(n + m) where n is the length of s2 and m is the length of s1.
// Space Complexity: O(1) as the character counter uses a fixed amount of space.
class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const counter = {};
        
        for (let i = 0; i < s1.length; i++) {
            counter[s1[i]] = (counter[s1[i]] || 0) + 1; 
        }

        let left = 0;
        let remaining = s1.length;

        for (let right = 0; right < s2.length; right++) {
            if (counter[s2[right]] !== undefined) {
                counter[s2[right]]--;
                if (counter[s2[right]] >= 0) {
                    remaining--;
                }
            }

            if (right - left + 1 > s1.length) {
                if (counter[s2[left]] !== undefined) {
                    counter[s2[left]]++;
                    if (counter[s2[left]] > 0) {
                        remaining++;
                    }
                }
                left++;
            }

            if (remaining === 0) return true;
        }

        return false;
    }
}
