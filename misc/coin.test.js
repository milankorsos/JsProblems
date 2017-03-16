import cashier from './coin';

test('cashier', () => {
  expect(cashier(4, [1, 2, 3])).toEqual(4);
})
