// Valid Palindrome - Easy
// 
// Problem Description:
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. A string is a palindrome if it reads the same forward and backward after cleaning.
// 
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// 
// Example 2:
// Input: s = "race a car"
// Output: false
// 
// Example 3:
// Input: s = " "
// Output: true
// 
// Constraints:
// 1 <= s.length <= 2 * 10^5
// s consists only of printable ASCII characters.
// 
// Approach (Two Pointers):
// Clean the string by removing non-alphanumeric characters and converting to lowercase, then use two pointers starting from the beginning and end to compare characters, moving inward until they meet.
// 
// Time Complexity: O(n) - where n is the length of the string, as we process each character once.
// Space Complexity: O(1) - additional space is constant, though a cleaned string copy uses O(n) auxiliary space.

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[^a-zA-Z0-9]/g;
        const string = s.replace(regex, "").toLowerCase();
        let i = 0;
        let j = string.length - 1;

        while (i < string.length && j >= 0) {
            if (string[i] !== string[j]) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    }
}