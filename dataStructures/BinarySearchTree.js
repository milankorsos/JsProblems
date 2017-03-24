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
    if (node.left) {
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
  let result = '';
  const stack = []; // use stack.push & stack.pop for stack-like behavior
  stack.push(node);

  while (stack.length) {
    const current = stack.pop();

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }

    result += current.value + ' ';
  }

  return result.trim();
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

BinarySearchTree.prototype.getMin = function(node = this.root) {
  let min;
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

BinarySearchTree.prototype.getMax = function(node = this.root) {
  let max;
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

BinarySearchTree.prototype.contains = function(value, node = this.root) {
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
};

// Tree is balanced if the height difference between the left and right subtrees is not more than 1
BinarySearchTree.prototype.isBalanced = function(node = this.root) {
  if (!node) {
    return true;
  }

  let isBalanced = true;
  if (node.left && node.right) {
    isBalanced = this.isBalanced(node.left) && this.isBalanced(node.right);
  } else if (!node.left && !node.right) {
    isBalanced = true;
  } else {
    let leftHeight = 0;
    let rightHeight = 0;
    if (node.left) {
      leftHeight = this.getHeight(node.left) + 1;
    }
    if (node.right) {
      rightHeight = this.getHeight(node.right) + 1;
    }
    isBalanced = Math.abs(leftHeight - rightHeight) <= 1;
  }
  return isBalanced;
};

BinarySearchTree.prototype.remove = function(value, node = this.root, parent) {
  if (!node) {
    return;
  }

  // Node is the one has to be removed
  if (node.value === value) {

    // Node has no children
    if (!node.right && !node.left) {

      // handle special case for root
      if (node === this.root) {
        this.root = null;
        return;
      }

      // remove node's reference from parent
      if (value < parent.value) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      return;
    }

    // Node has  two children
    if (node.right && node.left) {
      // move up right substree's minimum to node
      const rightMin = this.getMin(node.right);
      node.value = rightMin;
      this.remove(rightMin, node.right, node);
      return;
    }

    // Node has one child
    if (node.right) {
      if (value < parent.value) {
        parent.left = node.right;
      } else {
        parent.right = node.right;
      }
    } else if (node.left) {
      if (value < parent.value) {
        parent.left = node.left;
      } else {
        parent.right = node.left;
      }
    }
  } else {
    // Need to keep searching for node to be removed
    const child = value < node.value ? node.left : node.right;
    this.remove(value, child, node);
  }

};

export default BinarySearchTree;
