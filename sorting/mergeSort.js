/*
 Merge Sort O(n log(n))
 - divide unsorted list to n sublists
 - merge sublists until only 1 sublist exits
*/

const mergeSort = function(array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = function(left, right) {
  const sortedArray = [];
  while(left.length && right.length) {
    sortedArray.push(
      left[0] < right[0] ? left.shift() : right.shift()
    );
  }

  return sortedArray.concat(left).concat(right);
}

export default mergeSort;
