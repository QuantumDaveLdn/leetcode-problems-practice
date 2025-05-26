// Encode and Decode Strings - Medium
//
// Problem Description:
// Design an algorithm to encode a list of strings into a single string and decode
// the string back into the original list of strings.
//
// Example 1:
// Input: strs = ["hello", "world"]
// Encoded Output: "5#hello5#world"
// Decoded Output: ["hello", "world"]
//
// Example 2:
// Input: strs = [""]
// Encoded Output: "0#"
// Decoded Output: [""]
//
// Constraints:
// - 0 <= strs.length <= 200
// - 0 <= strs[i].length <= 200
// - strs[i] can contain any valid ASCII characters.
//
// Approach (Length Prefixing):
// Encode: For each string, prepend its length followed by a '#' delimiter.
// Decode: Parse the length, skip the delimiter, and extract the exact number of characters.
//
// Time Complexity: O(n) - where n is the total number of characters across all strings.
// Space Complexity: O(n) - for the encoded string and the result list.

class Solution {
    /**
     * Encodes a list of strings into a single string.
     * @param {string[]} strs - The list of strings to encode.
     * @returns {string} - The encoded string.
     */
    encode(strs) {
        let res = "";
        for (const str of strs) {
            res += String(str.length) + "#" + str;
        }
        return res;
    }

    /**
     * Decodes a single string back into a list of strings.
     * @param {string} str - The encoded string.
     * @returns {string[]} - The decoded list of strings.
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let hashIndex = str.indexOf("#", i);
            if (hashIndex === -1) break;

            let length = parseInt(str.substring(i, hashIndex));

            let start = hashIndex + 1;
            let end = start + length;
            i = end;
            res.push(str.substring(start, end));
        }
        return res;
    }
}