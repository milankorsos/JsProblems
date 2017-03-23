import BinaryTree, { BinaryTreeNode } from './balancedBinaryTree';


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

  test('5 | 3 | 1 is not superbalanced', () => {
    tree.add(1);
    expect(tree.isSuperBalanced()).toEqual(false);
  });

})
