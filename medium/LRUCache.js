// LRU Cache - Medium
//
// Problem Description:
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class with get and put operations that each run in O(1) average time.
//
// Example:
// Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
//        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output: [null, null, null, 1, null, -1, null, -1, 3, 4]
//
// Constraints:
// 1 <= capacity <= 3000
// 0 <= key <= 10^4
// 0 <= value <= 10^5
// At most 2 * 10^5 calls to get and put
//
// Approach:
// Use Map to maintain insertion order and provide O(1) operations.
// Delete and re-insert to move items to end for LRU tracking.
//
// Time Complexity:
// - get: O(1) - map operations
// - put: O(1) - map operations and eviction
// Space Complexity: O(capacity) - stores at most capacity key-value pairs

class LRUCache {
   /**
    * @param {number} capacity
    */
   constructor(capacity) {
       this.capacity = capacity;
       this.cache = new Map(); // Maintains insertion order
   }

   /**
    * @param {number} key
    * @return {number}
    */
   get(key) {
       if (this.cache.has(key)) {
           const value = this.cache.get(key);
           this.cache.delete(key);  // Remove from current position
           this.cache.set(key, value);  // Re-insert at end (most recent)
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
           this.cache.delete(key);  // Remove existing entry
       }
       this.cache.set(key, value);  // Insert at end
       
       if (this.cache.size > this.capacity) {
           // Remove least recently used (first item)
           const firstKey = this.cache.keys().next().value;
           this.cache.delete(firstKey);
       }
   }
}