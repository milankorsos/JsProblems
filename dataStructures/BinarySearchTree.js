/*
  Binary Search Tree implementation

  A Binary Search Tree data structure is a rooted binary tree, whose internal nodes each store a key
  (and optionally, an associated value) and each have two distinguished sub-trees, commonly denoted
  left and right.

  The tree additionally satisfies the binary search tree property, which states that the key in each
  node must be greater than all keys stored in the left sub-tree, and smaller than all keys in right
  sub-tree.

  http://blog.benoitvallon.com/data-structures-in-javascript/the-binary-search-tree-data-structure/

*/

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.size = function(node = this.root) {
  let size = 0;
  if (node) {
    size++; // current node
    if (node.left) {
      size += this.size(node.left); // left children
    }
    if (node.right) {
      size += this.size(node.right); // right children
    }
  }
  return size;
};

BinarySearchTree.prototype.print = function(node = this.root) {
  if(!this.root) {
    return "";
  }
  const newline = new Node('|');
  const queue = [this.root, newline];
  let string = '';
  while(queue.length) {
    const node = queue.shift();
    string += node.value.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  return string.slice(0, -2).trim();
};

BinarySearchTree.prototype.add = function(value, parent = this.root) {
  const node = new Node(value);
  if (!this.root) { // Handle root as special case
    this.root = node;
  } else {
    if (value < parent.value) { // Add value to the left subtree
      if (!parent.left) {
        parent.left = node;
      } else {
        this.add(value, parent.left);
      }
    } else if (value > parent.value) { // Add value to the right subtree
      if (!parent.right) {
        parent.right = node;
      } else {
        this.add(value, parent.right);
      }
    }
  }
};

export default BinarySearchTree;