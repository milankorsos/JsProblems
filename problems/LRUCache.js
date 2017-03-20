/*

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the
following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache,
otherwise return -1.

put(key, value) - Set or insert the value if the key is not already present. When the cache
reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

https://leetcode.com/problems/lru-cache/

*/

const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.storage = [];  // tail of the array is the LRU
  // [{
  //   key:
  //   value
  // }]
}

// O(n)
LRUCache.prototype.put = function(key, value) {
  // Check if we have the key & if so, remove it
  const index = this.storage.findIndex(item => { // O(n)
    return item.key === key;
  });

  // If key exists, remove it
  if (index !== -1) {
    this.storage.splice(index, 1); // O(n)
  }

  // If we hit capacity, remove first one
  if (this.storage.length === this.capacity) {
    this.storage.shift(); // O(n)
  }

  // Push value to end of array
  this.storage.push({ key, value }); // O(1)
}

// O(n)
LRUCache.prototype.get = function(key) {
  // Check if we have the key, if so move it to tail & return value
  const index = this.storage.findIndex(item => {
    return item.key === key;
  }); // O(n)

  // Move item to end of array
  let value;
  if (index !== -1) {
    value = this.storage[index].value;
    this.storage.splice(index, 1); // O(n)
    this.storage.push({ key, value }); // O(1)
  }

  return value || -1;
}


export default LRUCache;
