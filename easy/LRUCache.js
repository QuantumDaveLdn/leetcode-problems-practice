// LRU Cache - Medium
// 
// Problem Description:
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// - int get(int key) Return the value of the key if the key exists, otherwise return -1.
// - void put(int key, int value) Update the value of the key if exists. Otherwise, add the key-value pair to the cache.
//   If the number of keys exceeds the capacity from this operation, evict the least recently used key.
//
// The functions get and put must each run in O(1) average time complexity.
//
// Example 1:
// Input: 
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output:
// [null, null, null, 1, null, -1, null, -1, 3, 4]
//
// Constraints:
// 1 <= capacity <= 3000
// 0 <= key <= 10000
// 0 <= value <= 100000
// At most 2 * 10^5 calls will be made to get and put.
//
// Approach (Map with Insertion Order):
// Use JavaScript's Map which maintains insertion order.
// For get: If key exists, delete and re-add to move to end (most recent).
// For put: If key exists, delete it. If at capacity, remove first (oldest) key.
// Then add new key-value pair at end.
//
// Time Complexity: O(1) - Map operations are average O(1)
// Space Complexity: O(capacity) - stores at most capacity key-value pairs

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
            this.cache.set(key, value);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }  
    }
}
