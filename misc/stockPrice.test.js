import getMaxProfit from './stockPrice';

const stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// returns 6 (buying for $5 and selling for $11)

test('stockPrice', () => {
  expect(getMaxProfit(stockPricesYesterday)).toEqual(6);
})
