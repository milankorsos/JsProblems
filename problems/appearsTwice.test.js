import appearsTwice from './appearsTwice';

describe('appearsTwice', () => {

  test('empty', () => {
    expect(appearsTwice([])).toEqual(null);
  });

  test('no item appears twice', () => {
    expect(appearsTwice([1, 2, 3, 4, 5])).toEqual(null);
  });

  test('item appears twice', () => {
    expect(appearsTwice([6, 2, 4, 5, 3, 5, 1])).toEqual(5);
  });

});
