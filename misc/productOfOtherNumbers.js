/*
  You have an array of integers, and for each index you want to find the product of every integer
  except the integer at that index.

  Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns
  an array of the products.

  For example, given:

    [1, 7, 3, 4]

  your function would return:

    [84, 12, 28, 21]

  by calculating:

    [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

  Do not use division in your solution.

*/

const getProductsOfAllIntsExceptAtIndex = function(ints) {

  // products before index
  let beforeIndex = [];
  for (let i = 0; i < ints.length; i++) {
    if (i === 0) {
      beforeIndex.push(1);
    } else {
      beforeIndex.push(beforeIndex[i - 1] * ints[i - 1]);
    }
  }

  // products after index
  let afterIndex = [];
  for (let i = 0; i < ints.length; i++) {
    const j = ints.length - i - 1;
    if (j === ints.length -1) {
      afterIndex.push(1);
    } else {
      afterIndex.push(afterIndex[i - 1] * ints[j + 1]);
    }
  }

  // calculating results
  let products = [];
  for (let i = 0; i < beforeIndex.length; i++) {
    const j = beforeIndex.length - i - 1;
    products.push(beforeIndex[i] * afterIndex[j]);
  }

  return products;
}

export default getProductsOfAllIntsExceptAtIndex;
