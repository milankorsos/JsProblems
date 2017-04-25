/*
  Suppose we had an array of n integers sorted in ascending order.

  How quickly could we check if a given integer is in the array?

  https://www.interviewcake.com/question/javascript/find-in-ordered-set
*/


const find = function(arr, num) {
  // Easiest way is to iterate through the array and check if any item matches num
  //return !!arr.find(item => num === item); // O(n)

  // Can we do better? O(1) is not viable but we can try O(log n) w binary search
  return arr.length ? _find(arr, num, 0, arr.length - 1) : false;
}

const _find = function(arr, num, startIndex, endIndex) {

  // Base cases
  if (endIndex === startIndex) {
    return arr[endIndex] === num;
  }
  console.log('FIND', startIndex, endIndex)

  // Recursive case
  const guessIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  const guessValue = arr[guessIndex];
  let result;

  if (guessValue === num) {
    result = true;
  } else if (guessValue > num) {
    result = _find(arr, num, startIndex, guessIndex);
  } else {
    result = _find(arr, num, guessIndex + 1, endIndex);
  }

  return result;
}

export default find;
