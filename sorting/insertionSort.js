/*
 Insertion Sort O(n^2)
 - iterate through the array
 - if out of place item found move it to its final place
*/
const swap = function(array, index1, index2) {
  const tempItem = array[index1];
  array[index1] = array[index2];
  array[index2] = tempItem;
}

const insertionSort = function(array) {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];

    if (array[i - 1] > current) {
      // move current to its final spot
      for (let j = 0; j < i; j++) {
        if (array[j] > current) {
          swap(array, j, i);
        }
      }
    }
  }

  return array;
};

export default insertionSort;
