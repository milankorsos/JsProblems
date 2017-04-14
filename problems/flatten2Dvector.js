/*
  Flatten 2D Vector

  Implement an iterator to flatten a 2d vector.

  For example,
  Given 2d vector =
    [
      [1,2],
      [3],
      [4,5,6]
    ]

  By calling next repeatedly until hasNext returns false, the order of elements returned by
  next should be: [1,2,3,4,5,6].

  https://leetcode.com/problems/flatten-2d-vector/#/description
*/

const Iterator = function(arr) {
  this.arr = arr;
  this.x = null;
  this.y = null;
}

Iterator.prototype.movePointer = function() {
  const nextRowWithValue = this.getNextRowWithValue();

  // First case: move to the first item
  if (this.x === null && this.y === null) {
    this.x = nextRowWithValue;
    this.y = 0;
  } else {
    // Otherwise: move to the next in row if exists, otherwise next row first one
    const hasNextInRow = this.y < this.arr[this.x].length - 1;
    const hasNextRow = nextRowWithValue !== false;
    if (hasNextInRow) {
      this.y++;
    } else {
      if (hasNextRow) {
        this.x = nextRowWithValue;
        this.y = 0;
      }
    }
  }
}

Iterator.prototype.getNextRowWithValue = function() {
  const current = this.x === null ? -1 : this.x;

  for (let i = current + 1; i < this.arr.length; i++) {
    const row = this.arr[i];
    if (row.length) {
      return i;
    }
  }

  return false;

}

Iterator.prototype.hasNext = function() {
  if (this.arr.length === 0) {
    return false;
  }

  let hasNext = false;

  const nextRowWithValue = this.getNextRowWithValue();

  // First case: move to the first item
  if (this.x === null && this.y === null) {
    // only true if there are any rows with values
    if (nextRowWithValue !== false) {
      hasNext = true;
    }
  } else {
    // Otherwise: move to the next in row if exists, otherwise next row first one
    const hasNextInRow = this.y < this.arr[this.x].length - 1;
    const hasNextRow = nextRowWithValue !== false;
    if (hasNextInRow) {
      hasNext = true;
    } else if (hasNextRow) {
      hasNext = true;
    }

  }

  return hasNext;
}

Iterator.prototype.next = function() {
  let result;

  const hasNext = this.hasNext();

  if (hasNext) {
    this.movePointer();
    result = this.arr[this.x][this.y];
  } else {
    result = null;
  }

  return result;
}

export default Iterator;
