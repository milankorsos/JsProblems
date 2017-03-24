import BinaryTree from '../dataStructures/BinarySearchTree';
/*
  Write a function to see if a binary tree is "superbalanced" (a new tree property we just made
  up).

  https://www.interviewcake.com/question/javascript/balanced-binary-tree
*/

// A tree is "superbalanced" if the difference
// between the depths of any two leaf nodes is no greater than one.
BinaryTree.prototype.isSuperBalanced = function() {
  if (!this.root) {
    return true;
  }

  const depths = [];
  const stack = []; // stack.push() & stack.pop() for stack like behavior
  stack.push({ node: this.root, depth: 0 });

  while (stack.length) {
    const { node, depth } = stack.pop();

    if (!node.right && !node.left) {
      if (depths.indexOf(depth) === -1) {
        depths.push(depth)
      }
    } else {
      if (node.right) {
        stack.push({ node: node.right, depth: depth + 1});
      }
      if (node.left) {
        stack.push({ node: node.left, depth: depth + 1});
      }
    }
  }

  // Superbalanced if there are only 2 different depths & diff between them is less than 2
  let superbalanced = false;
  if (depths.length == 1) {
    superbalanced = true;
  }  else if (depths.length == 2) {
    superbalanced = Math.abs(depths[0] - depths[1]) < 2;
  }
  return superbalanced;
}

export default BinaryTree;
