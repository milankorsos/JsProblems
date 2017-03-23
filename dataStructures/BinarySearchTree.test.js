import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTree', () => {

  const tree = new BinarySearchTree();

  describe('add', () => {
    test('root', () => {
      tree.add(5);
      expect(tree.print()).toEqual('5');
      expect(tree.size()).toEqual(1);
    });

    test('first level', () => {
      tree.add(3); // left
      tree.add(7); // right
      expect(tree.print()).toEqual('5 | 3 7');
      expect(tree.size()).toEqual(3);
    });

    test('second level', () => {
      tree.add(2); // left left
      tree.add(4); // left right
      tree.add(6); // right left
      tree.add(8); // right right

      expect(tree.print()).toEqual('5 | 3 7 | 2 4 6 8');
      expect(tree.size()).toEqual(7);
    });

    test('do not add duplicate', () => {
      tree.add(4);
      expect(tree.print()).toEqual('5 | 3 7 | 2 4 6 8');
      expect(tree.size()).toEqual(7);
    });
  });

  test('traverseInOrderDFS', () => {
    expect(tree.traverseInOrderDFS()).toEqual('2 3 4 5 6 7 8');
  });

  test('traversePreOrderDFS', () => {
    expect(tree.traversePreOrderDFS()).toEqual('5 3 2 4 7 6 8');
  });

  test('traversePostOrderDFS', () => {
    expect(tree.traversePostOrderDFS()).toEqual('2 4 3 6 8 7 5');
  });

  test('traverseBFS', () => {
    expect(tree.traverseBFS()).toEqual('5 3 7 2 4 6 8');
  });

  test('getMin', () => {
    expect(tree.getMin()).toEqual(2);
  });

  test('getMax', () => {
    expect(tree.getMax()).toEqual(8);
  });

  test('contains', () => {
    expect(tree.contains(3)).toEqual(true);
    expect(tree.contains(9)).toEqual(false);
  });

  test('getHeight', () => {
    expect(tree.getHeight()).toEqual(2);
  });

  test('isBalanced', () => {
    expect(tree.isBalanced()).toEqual(true);
  });

  describe('remove', () => {

    test('non-existing node', () => {
      tree.remove(11);
      expect(tree.print()).toEqual('5 | 3 7 | 2 4 6 8');
    });

    test('root: remove 5, 6 goes up', () => {
      tree.remove(5);
      expect(tree.print()).toEqual('6 | 3 7 | 2 4 8');
    });

    test('mid-level: remove 7, 8 goes up', () => {
      tree.remove(7);
      expect(tree.print()).toEqual('6 | 3 8 | 2 4');
    });

    test('leaf: remove 8, the tree becomes unbalanced', () => {
      tree.remove(8);
      expect(tree.print()).toEqual('6 | 3 | 2 4');
      //expect(tree.isBalanced()).toEqual(false); // FIXME
    });

    test('remove all', () => {
      tree.remove(4);
      tree.remove(2);
      tree.remove(3);
      tree.remove(6);
      expect(tree.print()).toEqual('');
      expect(tree.getHeight()).toEqual(-1);
      //expect(tree.isBalanced()).toEqual(true);
    });

    test('add a new root', () => {
      tree.add(10);
      expect(tree.print()).toEqual('10');
      expect(tree.getHeight()).toEqual(0);
      expect(tree.isBalanced()).toEqual(true);
    });

    test('build a new tree', () => {
      tree.add(6);
      tree.add(14);
      tree.add(4);
      tree.add(8);
      tree.add(12);
      tree.add(16);
      tree.add(3);
      tree.add(5);
      tree.add(7);
      tree.add(9);
      tree.add(11);
      tree.add(13);
      tree.add(15);
      tree.add(17);
      expect(tree.print()).toEqual('10 | 6 14 | 4 8 12 16 | 3 5 7 9 11 13 15 17');
    });

    test('remove 10, 11 goes up', () => {
      tree.remove(10);
      expect(tree.print()).toEqual('11 | 6 14 | 4 8 12 16 | 3 5 7 9 13 15 17');
    });

    test('remove 12, 13 goes up', () => {
      tree.remove(12);
      expect(tree.print()).toEqual('11 | 6 14 | 4 8 13 16 | 3 5 7 9 15 17');
      expect(tree.isBalanced()).toEqual(true);
    });

    test('remove 13, 13 has no children so nothing changes', () => {
      tree.remove(13);
      expect(tree.print()).toEqual('11 | 6 14 | 4 8 16 | 3 5 7 9 15 17');
      // expect(tree.isBalanced()).toEqual(false);
    });

  });
});
