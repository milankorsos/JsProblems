/*
  Given an array of integers, find the highest product you can get from three of the integers.

  The input arrayOfInts will always have at least three integers.

  https://www.interviewcake.com/question/javascript/highest-product-of-3
*/

const highestProductOf3 = function(ints) {

  let highest = 0;
  for (let i = 0; i < ints.length; i++) {
    const first = ints[i];

    for (let j = i + 1; j < ints.length; j++) {

      const second = ints[j];

      for (let k = j + 1; k < ints.length; k++) {
        const third = ints[k];
        highest = Math.max(highest, first * second * third);
      }
    }
  }

  return highest;
}

export default highestProductOf3;
