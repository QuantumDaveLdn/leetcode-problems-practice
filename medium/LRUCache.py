# LRU Cache - Medium
#
# Problem Description:
# Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
# Implement the LRUCache class with get and put operations that each run in O(1) average time.
#
# Example:
# Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
#        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
# Output: [null, null, null, 1, null, -1, null, -1, 3, 4]
#
# Constraints:
# 1 <= capacity <= 3000
# 0 <= key <= 10^4
# 0 <= value <= 10^5
# At most 2 * 10^5 calls to get and put
#
# Approach:
# Use OrderedDict to maintain insertion order and provide O(1) operations.
# Move accessed items to end to mark as recently used.
#
# Time Complexity:
# - get: O(1) - dictionary lookup and move_to_end
# - put: O(1) - dictionary operations and eviction
# Space Complexity: O(capacity) - stores at most capacity key-value pairs

from collections import OrderedDict

class LRUCache:
   def __init__(self, capacity: int):
       """Initialize LRU cache with given capacity."""
       self.capacity = capacity
       self.cache = OrderedDict()  # Maintains insertion order for LRU tracking
   
   def get(self, key: int) -> int:
       """Get value by key. Returns -1 if not found. Marks key as recently used."""
       if key in self.cache:
           value = self.cache[key]
           self.cache.move_to_end(key)  # Mark as most recently used
           return value
       return -1
   
   def put(self, key: int, value: int) -> None:
       """Insert/update key-value pair. Evicts least recently used if at capacity."""
       if key in self.cache:
           # Update existing key
           self.cache[key] = value
           self.cache.move_to_end(key)  # Mark as most recently used
       else:
           # Insert new key
           self.cache[key] = value
           if len(self.cache) > self.capacity:
               # Remove least recently used (first item)
               leastUsed = next(iter(self.cache))
               del self.cache[leastUsed]