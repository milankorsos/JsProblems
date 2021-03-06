/*
  Suppose we could access yesterday's stock prices as an array, where:

  The values are the price in dollars of Apple stock.
  A higher index indicates a later time.
  So if the stock cost $500 at 10:30am and $550 at 11:00am, then:

  stockPricesYesterday[60] = 500;

  Write an efficient function that takes stockPricesYesterday and returns the best profit I could
  have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

  https://www.interviewcake.com/question/javascript/stock-price

  const stockPricesYesterday = [10, 7, 5, 8, 11, 9];
  // returns 6 (buying for $5 and selling for $11)

*/

const getMaxProfit = function(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) {
    return 0;
  }

  let maxProfit = 0;
  let smallestPrice = stockPricesYesterday[0];

  stockPricesYesterday.forEach(currentPrice => {
    const profit = currentPrice - smallestPrice;

    if (profit > 0) {
      maxProfit = Math.max(maxProfit, profit);
    }

    smallestPrice = Math.min(smallestPrice, currentPrice);
  })

  return maxProfit;
}

export default getMaxProfit;
