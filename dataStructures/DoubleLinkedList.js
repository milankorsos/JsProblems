/*
  Doubly Linked List implementation

  Insert: O(1)
  Delete: O(1)
  Access: O(n)
  Search: O(b)

  http://blog.benoitvallon.com/data-structures-in-javascript/the-doubly-linked-list-data-structure/
*/

function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

DoubleLinkedList.prototype.print = function() { // O(n)
  let string = '';

  let node = this.head;
  while (node) {
    string += node.value + ' ';
    node = node.next;
  }

  return string.trim();
}

DoubleLinkedList.prototype.printReverse = function() { // O(n)
  let string = '';

  let node = this.tail;
  while (node) {
    string += node.value + ' ';
    node = node.prev;
  }

  return string.trim();
}

DoubleLinkedList.prototype.length = function() { // O(1)
  return this.numberOfValues;
}

DoubleLinkedList.prototype.add = function(value) { // O(1)
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.numberOfValues++;
}

DoubleLinkedList.prototype.remove = function(value) { // O(n)
  let prev = this.head;
  let current = this.head;

  while (current) {
    // Remove
    if (current.value === value) {
      // Remove head
      if (current === this.head) {
        if (current.next) {
          current.next.prev = null;
        }
        this.head = current.next;
      }

      // Remove tail
      if (current === this.tail) {
        this.tail = prev;
      }

      // Remove value
      if (prev !== current) {
        prev.next = current.next;
        if (current.next) {
          current.next.prev = prev;
        }
      }

      this.numberOfValues--;
      if (this.numberOfValues === 0) {
        this.tail = null;
      }
    }

    // Iterate
    prev = current;
    current = current.next;
  }
}

DoubleLinkedList.prototype.insertAfter = function(value, valueAfter) { // O(n)
  let current = this.head;
  while (current) {
    if (current.value === valueAfter) {
      const node = new Node(value);
      node.next = current.next;
      node.prev = current;
      if (node.next) {
        node.next.prev = node;
      }
      current.next = node;
      if (!node.next) {
        this.tail = node;
      }
      this.numberOfValues++;
      break;
    }
    current = current.next;
  }
}

export default DoubleLinkedList;
