/*
  Singly Linked List implementation

  Insert: O(1)
  Delete: O(1)
  Access: O(n)
  Search: O(b)

  http://blog.benoitvallon.com/data-structures-in-javascript/the-singly-linked-list-data-structure/

*/

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

LinkedList.prototype.print = function() { // O(n)
  let string = '';

  let node = this.head;
  while (node) {
    string += node.value + ' ';
    node = node.next;
  }

  return string.trim();
}

LinkedList.prototype.length = function() { // O(1)
  return this.numberOfValues;
}

LinkedList.prototype.add = function(value) { // O(1)
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    const last = this.tail;
    last.next = node;
    this.tail = node;
  }
  this.numberOfValues++;
}

LinkedList.prototype.remove = function(value) { // O(n)
  if (this.head) {

    // Remove first element
    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.numberOfValues--;
    // Remove middle element
    } else {
      let prev = this.head;
      let current = this.head.next;

      while (current) {
        // Remove current
        if (current.value === value) {
          prev.next = current.next
          if (!current.next) {
            this.tail = prev;
          }
          this.numberOfValues--;
          break;
        }

        // Iterate
        prev = current;
        current = current.next;
      }
    }
  }
}

LinkedList.prototype.insertAfter = function(value, valueAfter) { // O(n)
  let current = this.head;
  while (current) {
    if (current.value === valueAfter) {
      const node = new Node(value);
      node.next = current.next;
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

export default LinkedList;
