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
  if (ints.length < 2) {
    return [];
  }

  // products before index
  let productSoFar = 1;
  const products = [];
  for (let i = 0; i < ints.length; i++) {
    products[i] = productSoFar;
    productSoFar *= ints[i];
  }

  // products after index
  productSoFar = 1;
  for (let i = ints.length - 1; i >= 0; i--) {
    products[i] *= productSoFar;
    productSoFar *= ints[i];
  }

  return products;
}

export default getProductsOfAllIntsExceptAtIndex;
