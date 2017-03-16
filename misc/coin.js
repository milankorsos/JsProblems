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

const getSumOfArray = function(arr) {
  return arr.reduce((acc, value) => {
    return acc + value;
  }, 0);
}

// console.log('sum', getSumOfArray([1, 2, 3]) === 6);
// console.log('sum', getSumOfArray([]) === 0);
// console.log('sum', getSumOfArray([0]) === 0);

const isArrayHasArrayItem = function(arr, item) {
  const found = arr.find(arrItem => {
    if (arrItem.length !== item.length) {
      return false;
    } else {
      arrItem.sort();
      item.sort();
      for (let i = 0; i < arrItem.length; i++) {
        if (arrItem[i] !== item[i]) {
          return false;
        }
      }
      return true;
    }
  });
  return !!found;
}

// console.log('array', isArrayHasArrayItem([], [1, 2]) === false);
// console.log('array', isArrayHasArrayItem([[1, 2], [2, 3]], [1, 2]) === true);
// console.log('array', isArrayHasArrayItem([[2, 1], [2, 3]], [1, 2]) === true);
// console.log('array', isArrayHasArrayItem([[1, 3], [2, 3]], [1, 2]) === false);
// console.log('array', isArrayHasArrayItem([[1, 3], [2, 3, 4]], [1, 2]) === false);


const cashier = function(amount, denominations, results = [], tempResult = []) {
  const sum = getSumOfArray(tempResult);

  denominations.forEach(denomination => {
    const result = Array.from(tempResult);
    result.push(denomination);

    // Check if success
    if (sum + denomination === amount) {
      if (!isArrayHasArrayItem(results, result)) {
        results.push(result);
      }
      return true;
    }

    // Check if overshooting
    if (sum + denomination > amount) {
      return false;
    }

    // Otherwise, keep looking recursively
    cashier(amount, denominations, results, result);
  });

  return results.length;
}

export default cashier;
