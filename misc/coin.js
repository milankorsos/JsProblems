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

const cashier = function(amount, denominations, results = [], tempResults = []) {
  const count = tempResults.reduce((acc, value) => acc + value, 0)

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];

    const newTempResults = Array.from(tempResults);
    newTempResults.push(denomination)

    // if equals
    if (count + denomination === amount) {
      newTempResults.sort((a, b) => a > b ? 1 : -1);
      // check if this result is already in the results
      const dupe = results.find(arr => {
        if (arr.length !== newTempResults.length) {
          return false;
        } else {
          for (let k = 0; k < arr.length; k++) {
            if (arr[k] !== newTempResults[k]) {
              return false;
            }
          }
          return true;
        }
      })
      if (!dupe) {
        results.push(newTempResults);
      }
      return;
    }

    // otherwise keep looking
    cashier(amount, denominations, results, newTempResults);
  }

  console.log('results', results)

  return results.length;
}

export default cashier;
