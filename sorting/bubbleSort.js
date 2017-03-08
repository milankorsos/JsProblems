/*
  BubbleSort O(n^2)
  - iterate through pairs and change the ones next to each other
  - iterate through until its done
*/
const swap = function(array, index1, index2) {
  const tempItem = array[index1];
  array[index1] = array[index2];
  array[index2] = tempItem;
}

const bubbleSort = function(array) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] < array[i]) {
        sorted = false;
        swap(array, i, i +1);
      }

    }
  }
  return Array.from(array);
};

export default bubbleSort;
