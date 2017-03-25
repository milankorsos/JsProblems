import BinaryTree, { BinaryTreeNode } from './binaryTreeValidate';


describe('BinaryTree is is valid', () => {

  test('empty tree is valid', () => {
    const tree = new BinaryTree();
    expect(tree.isValid()).toBe(true);
  });

  test('50 is valid', () => {
    const tree = new BinaryTree();
    tree.add(50);
    expect(tree.isValid()).toBe(true);
  });

  test('50 | 30 x is valid', () => {
    const tree = new BinaryTree();
    tree.add(50);
    tree.add(30);
    expect(tree.isValid()).toBe(true);
  });

  test('50 | x 80 is valid', () => {
    const tree = new BinaryTree();
    tree.add(50);
    tree.add(80);
    expect(tree.isValid()).toBe(true);
  });

  test('50 | 30 80 is valid', () => {
    const tree = new BinaryTree();
    tree.add(50);
    tree.add(30);
    tree.add(80);
    expect(tree.isValid()).toBe(true);
  });

  test('50 | 30 20 is not valid', () => {
    const tree = new BinaryTree();
    tree.add(50);
    tree.add(30);
    tree.add(80);
    tree.root.right.value = 20;
    expect(tree.isValid()).toBe(false);
  });

  test('50 | 90 80 is not valid', () => {
    const tree = new BinaryTree();
    tree.add(50);
    tree.add(30);
    tree.add(80);
    tree.root.left.value = 90;
    expect(tree.isValid()).toBe(false);
  });

  test('50 | 30 80 | 20 40 70 90', () => {
    const tree = new BinaryTree();
    tree.add(50);
    tree.add(30);
    tree.add(80);
    tree.add(20);
    tree.add(40);
    tree.add(70);
    tree.add(90);

    expect(tree.isValid()).toEqual(true);
  });

  test('50 | 30 80 | 20 60 70 90 is not valid', () => {
    const tree = new BinaryTree();
    tree.add(50);
    tree.add(30);
    tree.add(80);
    tree.add(20);
    tree.add(40);
    tree.add(70);
    tree.add(90);
    tree.root.left.right.value = 60;
    expect(tree.isValid()).toEqual(false);
  });

  test('1 | 1 is not valid', () => {
    const tree = new BinaryTree();
    tree.add(1);
    tree.add(0);
    tree.root.left.value = 1;
    console.log(tree.print())
    expect(tree.isValid()).toEqual(false);
  });

});
