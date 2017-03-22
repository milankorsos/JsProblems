import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTree', () => {

  const tree = new BinarySearchTree();

  describe('add', () => {
    test('tree is empty', () => {
      expect(tree.size()).toEqual(0);
      expect(tree.print()).toEqual('');
    });

    test('add root', () => {
      tree.add(5);
      expect(tree.size()).toEqual(1);
      expect(tree.print()).toEqual('5');
    });

    test('add left node', () => {
      tree.add(3);
      expect(tree.size()).toEqual(2);
      expect(tree.print()).toEqual('5 | 3');
    });

    test('add right node', () => {
      tree.add(7);
      expect(tree.size()).toEqual(3);
      expect(tree.print()).toEqual('5 | 3 7');
    });

    test('do not add duplicate', () => {
      tree.add(5);
      expect(tree.size()).toEqual(3);
      expect(tree.print()).toEqual('5 | 3 7');
    });

    test('add left left node (one level deep)', () => {
      tree.add(2);
      expect(tree.size()).toEqual(4);
      expect(tree.print()).toEqual('5 | 3 7 | 2');
    });

    test('add left right node (one level deep)', () => {
      tree.add(4);
      expect(tree.size()).toEqual(5);
      expect(tree.print()).toEqual('5 | 3 7 | 2 4');
    });


    test('add right left node (one level deep)', () => {
      tree.add(6);
      expect(tree.size()).toEqual(6);
      expect(tree.print()).toEqual('5 | 3 7 | 2 4 6');
    });

    test('add right right node (one level deep)', () => {
      tree.add(8);
      expect(tree.size()).toEqual(7);
      expect(tree.print()).toEqual('5 | 3 7 | 2 4 6 8');
    });

    test('add left left left node (two levels deep)', () => {
      tree.add(1);
      expect(tree.size()).toEqual(8);
      expect(tree.print()).toEqual('5 | 3 7 | 2 4 6 8 | 1');
    });

    test('add right right right node (two levels deep)', () => {
      tree.add(10);
      expect(tree.size()).toEqual(9);
      expect(tree.print()).toEqual('5 | 3 7 | 2 4 6 8 | 1 10');
    });
  });


  const tree2 = new BinarySearchTree();

  describe('example tests', () => {
    test('add', () => {
      tree2.add(5);
      tree2.add(3);
      tree2.add(7);
      tree2.add(2);
      tree2.add(4);
      tree2.add(4);
      tree2.add(6);
      tree2.add(8);
      expect(tree2.print()).toEqual('5 | 3 7 | 2 4 6 8');
    });
  });

// console.log('--- DFS inOrder');
// binarySearchTree.traverseDFS(function(node) { console.log(node.data); }, 'inOrder'); // => 2 3 4 5 6 7 8
// console.log('--- DFS preOrder');
// binarySearchTree.traverseDFS(function(node) { console.log(node.data); }, 'preOrder'); // => 5 3 2 4 7 6 8
// console.log('--- DFS postOrder');
// binarySearchTree.traverseDFS(function(node) { console.log(node.data); }, 'postOrder'); // => 2 4 3 6 8 7 5
// console.log('--- BFS');
// binarySearchTree.traverseBFS(function(node) { console.log(node.data); }); // => 5 3 7 2 4 6 8
// console.log('min is 2:', binarySearchTree.getMin()); // => 2
// console.log('max is 8:', binarySearchTree.getMax()); // => 8
// console.log('tree contains 3 is true:', binarySearchTree.contains(3)); // => true
// console.log('tree contains 9 is false:', binarySearchTree.contains(9)); // => false
// console.log('tree height is 2:', binarySearchTree.getHeight()); // => 2
// console.log('tree is balanced is true:', binarySearchTree.isBalanced()); // => true
// binarySearchTree.remove(11); // remove non existing node
// binarySearchTree.print(); // => 5 | 3 7 | 2 4 6 8
// binarySearchTree.remove(5); // remove 5, 6 goes up
// binarySearchTree.print(); // => 6 | 3 7 | 2 4 8
// binarySearchTree.remove(7); // remove 7, 8 goes up
// binarySearchTree.print(); // => 6 | 3 8 | 2 4
// binarySearchTree.remove(8); // remove 8, the tree becomes unbalanced
// binarySearchTree.print(); // => 6 | 3 | 2 4
// console.log('tree is balanced is false:', binarySearchTree.isBalanced()); // => true
// binarySearchTree.remove(4);
// binarySearchTree.remove(2);
// binarySearchTree.remove(3);
// binarySearchTree.remove(6);
// binarySearchTree.print(); // => 'No root node found'
// binarySearchTree.printByLevel(); // => 'No root node found'
// console.log('tree height is -1:', binarySearchTree.getHeight()); // => -1
// console.log('tree is balanced is true:', binarySearchTree.isBalanced()); // => true
// console.log('---');
// binarySearchTree.add(10);
// console.log('tree height is 0:', binarySearchTree.getHeight()); // => 0
// console.log('tree is balanced is true:', binarySearchTree.isBalanced()); // => true
// binarySearchTree.add(6);
// binarySearchTree.add(14);
// binarySearchTree.add(4);
// binarySearchTree.add(8);
// binarySearchTree.add(12);
// binarySearchTree.add(16);
// binarySearchTree.add(3);
// binarySearchTree.add(5);
// binarySearchTree.add(7);
// binarySearchTree.add(9);
// binarySearchTree.add(11);
// binarySearchTree.add(13);
// binarySearchTree.add(15);
// binarySearchTree.add(17);
// binarySearchTree.print(); // => 10 | 6 14 | 4 8 12 16 | 3 5 7 9 11 13 15 17
// binarySearchTree.remove(10); // remove 10, 11 goes up
// binarySearchTree.print(); // => 11 | 6 14 | 4 8 12 16 | 3 5 7 9 x 13 15 17
// binarySearchTree.remove(12); // remove 12; 13 goes up
// binarySearchTree.print(); // => 11 | 6 14 | 4 8 13 16 | 3 5 7 9 x x 15 17
// console.log('tree is balanced is true:', binarySearchTree.isBalanced()); // => true
// console.log('tree is balanced optimized is true:', binarySearchTree.isBalancedOptimized()); // => true
// binarySearchTree.remove(13); // remove 13, 13 has no children so nothing changes
// binarySearchTree.print(); // => 11 | 6 14 | 4 8 x 16 | 3 5 7 9 x x 15 17
// console.log('tree is balanced is false:', binarySearchTree.isBalanced()); // => false
// console.log('tree is balanced optimized is false:', binarySearchTree.isBalancedOptimized()); // => false

});