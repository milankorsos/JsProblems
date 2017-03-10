import getProductsOfAllIntsExceptAtIndex from './productOfOtherNumbers';

test('getProductsOfAllIntsExceptAtIndex', () => {
  expect(
    getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4])
  ).toEqual([84, 12, 28, 21]);
})

test('getProductsOfAllIntsExceptAtIndex', () => {
  expect(
    getProductsOfAllIntsExceptAtIndex([1, 2, 6, 5, 9])
  ).toEqual([540, 270, 90, 108, 60]);
})
