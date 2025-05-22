// Valid Anagram - Easy
// 
// Problem Description:
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An anagram is a string that contains the exact same characters as another string,
// but the order of the characters can be different.
// 
// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true
// 
// Example 2:
// Input: s = "jar", t = "jam"
// Output: false
//
// Constraints:
// s and t consist of lowercase English letters.
//
// Approach (Sorting):
// Sort both strings and compare them directly.
// If they are equal after sorting, they are anagrams.
//
// Time Complexity: O(n log n) - dominated by the sorting operation
// Space Complexity: O(n) - for creating new arrays during sort operations
class Solution {
/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
    isAnagram(s, t) {
        return s.split("").sort().join("") === t.split("").sort().join("");
    }
}
