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

// In-order: left, current, right
BinarySearchTree.prototype.traverseInOrderDFS = function(node = this.root) {
  let str = '';
  if (node) {
    // left
    if (node.left) {
      str = str.concat(this.traverseInOrderDFS(node.left), ' ');
    }
    // current
    str = str.concat(node.value, ' ');
    // right
    if (node.right) {
      str = str.concat(this.traverseInOrderDFS(node.right), ' ');
    }
  }
  return str.trim();
};

// Pre-order: current, left, right
BinarySearchTree.prototype.traversePreOrderDFS = function(node = this.root) {
  let str = '';
  if (node) {
    // current
    str = str.concat(node.value, ' ');
    // left
    if (node.left) {
      str = str.concat(this.traversePreOrderDFS(node.left), ' ');
    }
    // right
    if (node.right) {
      str = str.concat(this.traversePreOrderDFS(node.right), ' ');
    }
  }
  return str.trim();
};

// Post-order: left, right, current
BinarySearchTree.prototype.traversePostOrderDFS = function(node = this.root) {
  let str = '';
  if (node) {
    // left
    if (node.left) {
      str = str.concat(this.traversePostOrderDFS(node.left), ' ');
    }
    // right
    if (node.right) {
      str = str.concat(this.traversePostOrderDFS(node.right), ' ');
    }
    // current
    str = str.concat(node.value, ' ');
  }
  return str.trim();
};

BinarySearchTree.prototype.traverseBFS = function() {
  let str = '';
  const queue = []; // use queue.unshift() & queue.pop() for queue-like behavior
  if (this.root) {
    queue.unshift(this.root);
  }

  while (queue.length) {
    const node = queue.pop();
    str = str.concat(node.value, ' ');
    if (node.left) {
      queue.unshift(node.left);
    }
    if (node.right) {
      queue.unshift(node.right);
    }
  }
  return str.trim()
};

BinarySearchTree.prototype.getMin = function() {
  let min;
  let node = this.root;
  while (node) {
    if (node.left) {
      node = node.left;
    } else {
      min = node.value;
      node = null;
    }
  }
  return min;
};

BinarySearchTree.prototype.getMax = function() {
  let max;
  let node = this.root;
  while (node) {
    if (node.right) {
      node = node.right;
    } else {
      max = node.value;
      node = null;
    }
  }
  return max;
};

BinarySearchTree.prototype.contains = function(value) {
  let node = this.root;
  while (node) {
    if (node.value === value) {
      return true;
    } else if (value < node.value) {
      node = node.left;
      if (!node) {
        return false;
      }
    } else if (value > node.value){
      node = node.right;
      if (!node) {
        return false;
      }
    }
  }
  return false;
};

BinarySearchTree.prototype.getHeight = function(node = this.root, level = -1) {
  if (node) {
    level = Math.max(this.getHeight(node.left, level + 1), this.getHeight(node.right, level + 1));
  }
  return level;
}

// Tree is balanced if the height difference between the left and right subtrees is not more than 1
BinarySearchTree.prototype.isBalanced = function(node = this.root) {
  if (!node) {
    return true;
  }

  let isBalanced;
  if (node.left && node.right) {
    isBalanced = this.isBalanced(node.left) && this.isBalanced(node.right);
  } else if (!node.left && !node.right) {
    isBalanced = true;
  } else {
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);
    isBalanced = Math.abs(leftHeight - rightHeight) <= 1;
  }
  return isBalanced;
}


export default BinarySearchTree;









