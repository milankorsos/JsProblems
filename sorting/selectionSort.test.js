import selectionSort from './selectionSort';

const array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
const sorted = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];

test('selectionSort', () => {
  expect(selectionSort(array)).toEqual(sorted);
})
