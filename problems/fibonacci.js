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
  if ((n === 0) || (n === 1)) {
    return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 1; i < n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
};

export default fibonacci;
