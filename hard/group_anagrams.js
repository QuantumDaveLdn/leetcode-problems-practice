// Group Anagrams - Medium
//
// Problem Description:
// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.
//
// Example:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// Constraints:
// 1 <= strs.length <= 10^4
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters only
//
// Approach:
// Use sorted string as key to group anagrams. All anagrams will have
// the same sorted character sequence (e.g., "eat" and "tea" both become "aet").
//
// Time Complexity: O(n * k log k) where n = number of strings, k = max string length
// Space Complexity: O(n * k) for storing all strings in the hash map

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();  // Map to store sorted string -> array of anagrams

        for (let i = 0; i < strs.length; i++) {
            // Create key by sorting characters in the string
            const sortedStr = strs[i].split("").sort().join("");
            
            // Initialize array if key doesn't exist
            if (!hashMap.get(sortedStr)) {
                hashMap.set(sortedStr, []);
            }
            
            // Add current string to its anagram group
            hashMap.get(sortedStr).push(strs[i]);
        }

        // Return all anagram groups as array of arrays
        return Array.from(hashMap.values());
    }
}