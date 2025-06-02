// Time Based Key-Value Store - Medium
// 
// Problem Description:
// Design a time-based key-value data structure that supports two operations: set(string key, string value, int timestamp) to store the value along with the timestamp, and get(string key, int timestamp) to return the value for the key at or before the given timestamp.
// 
// Example 1:
// Input: ["TimeMap", "set", "get", "get", "set", "get", "get"]
//       [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// Output: [null, null, "bar", "", null, "bar2", "bar2"]
// Explanation: The operations store and retrieve values based on timestamps, returning the most recent value at or before the queried timestamp.
// 
// Example 2:
// Input: Various operations as above.
// Output: As per the key-value store logic.
// 
// Constraints:
// 0 <= timestamp <= 10^7
// 1 <= key.length, value.length <= 100
// key and value consist of lowercase letters and digits.
// At most 2 * 10^5 calls will be made to set and get.
// 
// Approach (Hash Map with Binary Search):
// Use a hash map where each key maps to an array of [value, timestamp] pairs, sorted by timestamp. For get, perform binary search on the array to find the largest timestamp that is less than or equal to the given timestamp.
// 
// Time Complexity: O(1) average for set, O(log n) for get where n is the number of values for a key.
// Space Complexity: O(n) - where n is the total number of set operations, to store the key-value pairs.

class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.get(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const object = this.keyStore.get(key);
        if (!object) {
            return "";
        }

        let output = "";
        let left = 0;
        let right = object.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (object[mid][1] === timestamp) {
                output = object[mid][0];
                return output;
            }

            if (object[mid][1] < timestamp) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (output === "" && left > 0 && object[left - 1]) {
            output = object[left - 1][0];
            return output;
        }
        return output;    
    }
}