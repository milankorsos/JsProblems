/*
  Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.
  Let's say our fibonacci series is 0-indexed and starts with 0. So:

  fib(0); // => 0
  fib(1); // => 1
  fib(2); // => 1
  fib(3); // => 2
  fib(4); // => 3

  The Fibonacci series is a numerical series where each item is the sum of the two previous items.
  It starts off like this:

  0,1,1,2,3,5,8,13,21...

  https://www.interviewcake.com/question/javascript/nth-fibonacci

*/

// O(n)
function fibonacci(n) {
  const memo = {};
  return fib(n, memo);
};


function fib(n, memo) {
  if (memo[n]) {
    return memo[n];
  }

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memo[n] = result;
  return result;
};

export default fibonacci;
