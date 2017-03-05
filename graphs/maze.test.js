import hasPath from './maze';

// Example 1

test('Example 1 should return true', () => {
  const grid = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0]
  ];
  const start = [0, 4];
  const destination = [4, 4];

  expect(hasPath(grid, start, destination)).toEqual(true);
})

// Example 2

test('Example 2 should return false', () => {
  const grid = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  const start = [0, 4];
  const destination = [3, 2];

  expect(hasPath(grid, start, destination)).toEqual(false);
})
