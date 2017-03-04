import numIslands from './numberOfIslands';

const example1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
];

test('Example 1 should include 1 island', () => {
  expect(numIslands(example1)).toEqual(1);
})

const example2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];

test('Example 2 should include 3 islands', () => {
  expect(numIslands(example2)).toEqual(3);
})
