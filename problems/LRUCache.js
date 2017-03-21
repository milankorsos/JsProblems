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

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
export const Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
}

/**
 */
export const DoubleLinkedList = function() {
  this.length = 0;
  this.first = null;
  this.last = null;
}

/**
 * @param {object} node
 * @return {void}
 */
DoubleLinkedList.prototype.remove = function(node) {
    const next = node.next;
    const prev = node.prev;

    if (prev && next) {
      // middle of the list
      prev.next = next;
      next.prev = prev;

    } else if (!prev && next) {
      // first item
      this.first = next;
      next.prev = null;

    } else if (prev && !next) {
      // last item
      this.last = prev;
      prev.next = null;

    } else {
      // only item
      this.first = null;
      this.last = null;
    }

    this.length--;
};

/**
 * @param {object} node
 * @return {void}
 */
DoubleLinkedList.prototype.addFirst = function(node) {
  if (this.length === 0) {
    this.first = node;
    this.last = node;
  } else {
    const current = this.first;
    this.first = node;
    node.next = current;
    current.prev = node;
  }
  this.length++;
};

/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.hash = {};
  this.list = new DoubleLinkedList();
};

/**
 * @param {number} key
 * @return {number}
*/
LRUCache.prototype.get = function(key) {
  let value;

  const existing = this.hash[key];
  if (existing) {
    value = existing.value;
    this.list.remove(existing);
    this.list.addFirst(existing);
  }

  return value || -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // If key exists, remove
  const existing = this.hash[key];
  if (existing) {
    this.list.remove(existing);
    delete this.hash[key];
  }

  // Check capacity, remove last one if reached
  const capacityReached = this.list.length === this.capacity;
  if (capacityReached) {
    const last = this.list.last;
    this.list.remove(last);
    delete this.hash[last.key];
  }

  // Add new one to first
  const node = new Node(key, value);
  this.hash[key] = node;
  this.list.addFirst(node);
};

export default LRUCache;
