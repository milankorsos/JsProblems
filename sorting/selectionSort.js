/*
 Selection Sort O(n^2)
 - scan all items and find smallest, move it to first position
 - call selection sort to the remaining of the array
*/
const swap = function(array, index1, index2) {
  const tempItem = array[index1];
  array[index1] = array[index2];
  array[index2] = tempItem;
}

const selectionSort = function(array) {
  if (array.length <= 1) {
    return array;
  }

  let smallestIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[smallestIndex] > array[i]) {
      smallestIndex = i;
    }
  }
  swap(array, smallestIndex, 0);

  const sorted = [array[0]];
  const unsorted = array.slice(1);

  return sorted.concat(selectionSort(unsorted))
};

export default selectionSort;
