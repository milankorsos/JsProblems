/*
  Given an array of integers, find the highest product you can get from three of the integers.

  The input arrayOfInts will always have at least three integers.

  https://www.interviewcake.com/question/javascript/highest-product-of-3
*/

const highestProductOf3 = function(ints) {

  const sortFunc = (a, b) => a > b ? 1 : 0;

  const highestPositives = []; // max length: 3, sorted
  const lowestNegatives = []; // max length: 2, sorted

  ints.forEach(int => {
    if (int >= 0) { // Positives
      if (highestPositives.length < 3) {
        highestPositives.push(int);
      } else {
        // check if int > lowest of highestPos, if so then update that
        if (int > highestPositives[0]) {
          highestPositives[0] = int;
        }
      }
      highestPositives.sort(sortFunc); // keep array sorted
    } else { // Negatives
      if (lowestNegatives.length < 2) {
        lowestNegatives.push(int);
      } else {
        // check if int < highest lowestNegatives, of so then update that
        if (int < lowestNegatives[1]) {
          lowestNegatives[1] = int;
        }
      }
    }
  });

  // Calculate highest product of 3
  highestPositives.push(lowestNegatives[0] * -1, lowestNegatives[1] * -1);
  highestPositives.sort(sortFunc);

  return highestPositives[4] * highestPositives[3] * highestPositives[2];
}

export default highestProductOf3;
