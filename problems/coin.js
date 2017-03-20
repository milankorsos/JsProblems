/*
  Imagine you landed a new job as a cashier...

  Your quirky boss found out that you're a programmer and has a weird request about something
  they've been wondering for a long time.

  Write a function that, given:
    an amount of money
    an array of coin denominations

  computes the number of ways to make amount of money with coins of the available denominations.

  Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would
  output 4—the number of ways to make 4¢ with those denominations:

  1¢, 1¢, 1¢, 1¢
  1¢, 1¢, 2¢
  1¢, 3¢
  2¢, 2¢

  https://www.interviewcake.com/question/javascript/coin

  Assumptions:
  - denominiations is a sorted array

*/


const cashier = function(amount, denominations) {
  const memo = {};
  return waysToMake(amount, denominations, 0, memo);
}

const waysToMake = function(amountLeft, denominations, index, memo) {

  // check memo first
  const memoKey = String([amountLeft, index]);
  if (memo[memoKey] !== undefined) {
    return memo[memoKey];
  }

  // base cases

  // we hit the amount
  if (amountLeft === 0) {
    return 1;
  }

  // we overshoot
  if (amountLeft < 0) {
    return 0;
  }

  // we are out of denominations
  if (denominations.length === index) {
    return 0
  }


  // choose current coint
  const currentCoin = denominations[index];

  // see how many possibilities we can get for each number of times to use currentCoin
  let possibilities = 0;
  while (amountLeft >= 0) {
    possibilities += waysToMake(amountLeft, denominations, index + 1, memo);
    amountLeft -= currentCoin;
  }

  // save answer to memo
  memo[memoKey] = possibilities;
  return possibilities;

};

export default cashier;
