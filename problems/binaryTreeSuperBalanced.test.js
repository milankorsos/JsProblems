import BinaryTree, { BinaryTreeNode } from './binaryTreeSuperBalanced';


describe('BinaryTree is superbalanced', () => {
  const tree = new BinaryTree();

  test('empty tree is superbalanced', () => {
    expect(tree.isSuperBalanced()).toEqual(true);
  });

  test('5 is superbalanced', () => {
    tree.add(5);
    expect(tree.isSuperBalanced()).toEqual(true);
  });

  test('5 | 3 is superbalanced', () => {
    tree.add(3);
    expect(tree.isSuperBalanced()).toEqual(true);
  });

  test('5 | 3 | 1 is superbalanced', () => {
    tree.add(1);
    expect(tree.isSuperBalanced()).toEqual(true);
  });

  test('5 | 3 7 | 1 x x 9 | 0 2 x x x x x x | -1  is superbalanced', () => {
    tree.add(7);
    tree.add(9);
    tree.add(0);
    tree.add(2);
    tree.add(-1);
    expect(tree.isSuperBalanced()).toEqual(false);
  });

})
