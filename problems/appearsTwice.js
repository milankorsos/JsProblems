/*
  I have an array where every number in the range 1...n appears once except for one number which appears twice.

  Write a function for finding the number that appears twice.

  https://www.interviewcake.com/question/javascript/which-appears-twice

*/

const triangularNumbersSum = function(n) {
  return (n*n + n) / 2;
}

const appearsTwice = function(array) {
  let dupe;
  let expected = triangularNumbersSum(array.length);
  let actual = 0;

  // Counting actual O(n)
  array.forEach(item => {
    actual += item;
  });

  // Check if there is dupe in the array
  if (actual < expected) {
    expected = triangularNumbersSum(array.length - 1); // calculate expected sum without the dupe
    dupe = actual - expected;
  } else {
    dupe = null;
  }

  return dupe;
}

export default appearsTwice;
