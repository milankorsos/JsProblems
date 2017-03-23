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

  // superbalanced if diff between min height and max height are 0 or 1
  const maxHeight = this._getMaxHeight(this.root, 0);
  const minHeight = this._getMinHeight(this.root, 0);
  console.log('isSuperBalanced', this.print())
  return maxHeight - minHeight <= 1;
}

BinaryTree.prototype._getMaxHeight = function(node, height = 0) {
  let leftHeight = height;
  let rightHeight = height;
  if (node.left) {
    leftHeight = this._getMaxHeight(node.left, leftHeight + 1);
  }
  if (node.right) {
    rightHeight = this._getMaxHeight(node.right, rightHeight + 1);
  }
  return Math.max(leftHeight, rightHeight);
}

BinaryTree.prototype._getMinHeight = function(node, height = 0) {
  let leftHeight = height;
  let rightHeight = height;
  if (node.left && node.right) {
    leftHeight = this._getMinHeight(node.left, leftHeight + 1);
    rightHeight = this._getMinHeight(node.right, rightHeight + 1);
  }
  return Math.min(leftHeight, rightHeight);
}

export default BinaryTree;
