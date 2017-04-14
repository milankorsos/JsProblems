import findUnique from './findUnique';

describe('findUnique', () => {

  test('empty', () => {
    expect(findUnique([])).toEqual(null);
  });

  test('one', () => {
    expect(findUnique([1])).toEqual(1);
  });

  test('two', () => {
    expect(findUnique([1, 1])).toEqual(null);
  });

  test('three', () => {
    expect(findUnique([1, 1, 2])).toEqual(2);

  });

  test('long', () => {
    expect(findUnique([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual(0);
  });

});
