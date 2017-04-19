import LinkedList from './linkedListKthToLast';

describe('LinkedList Kth Element', () => {
  const list = new LinkedList();

  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);

  test('last', () => {
    expect(list.kthToLast(0)).toEqual(4);
  });

  test('1 to last', () => {
    expect(list.kthToLast(1)).toEqual(3);
  });

  test('2 to last', () => {
    expect(list.kthToLast(2)).toEqual(2);
  });

  test('first', () => {
    expect(list.kthToLast(4)).toEqual(1);
  });

  test('out of index', () => {
    expect(list.kthToLast(9)).toEqual(null);
  });

})
