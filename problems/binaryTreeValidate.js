import BinaryTree from '../dataStructures/BinarySearchTree';
/*
  Validate BST

  Write a function to check that a binary tree ↴ is a valid binary search tree ↴

  https://www.interviewcake.com/question/javascript/bst-checker
*/

BinaryTree.prototype.isValid = function(node = this.root, min, max) {
  if (!node) {
    return true;
  }

  let isValid = true;

  // Check against min
  if (min) {
    if (node.value <= min) {
      isValid = false;
    }
  }

  // Check against max
  if (max) {
    if (node.value >= max) {
      isValid = false;
    }
  }

  // check is left subtree is valid
  if (node.left) {
    if (node.left.value > node.value) {
      isValid = false;
    }
    isValid = isValid && this.isValid(node.left, min, node.value);
  }

  // check is right subtree is valid
  if (node.right) {
    if (node.right.value < node.value) {
      isValid = false;
    }
    isValid = isValid && this.isValid(node.right, node.value, max);
  }

  return isValid;
}

export default BinaryTree;
