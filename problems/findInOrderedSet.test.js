import find from './findInOrderedSet';

describe('findInOrderedSet', () => {

  test('empty', () => {
    expect(
      find([], 3)
    ).toEqual(false);
  });

  test('item exists', () => {
    expect(
      find([0, 1, 2, 3, 5, 6, 7, 8, 9], 3)
    ).toEqual(true);
  });

  test('item doesnt exist', () => {
    expect(
      find([0, 1, 2, 3, 5, 6, 7, 8, 9], 4)
    ).toEqual(false);
  });

});
