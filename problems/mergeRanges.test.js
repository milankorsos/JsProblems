import mergeRanges from './mergeRanges';

const input = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10}
];

const expected = [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 8},
  {startTime: 9, endTime: 12},
];

test('mergeRanges', () => {
  expect(mergeRanges(input)).toEqual(expected);
})

test('mergeRanges2', () => {
  expect(
    mergeRanges([{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}])
  ).toEqual([{startTime: 1, endTime: 3}]);
})

test('mergeRanges3', () => {
  expect(
    mergeRanges([{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}])
  ).toEqual([{startTime: 1, endTime: 5}]);
})

test('mergeRanges4', () => {
  expect(
    mergeRanges([
      {startTime: 1, endTime: 10},
      {startTime: 2, endTime: 6},
      {startTime: 3, endTime: 5},
      {startTime: 7, endTime: 9},
    ])
  ).toEqual([{startTime: 1, endTime: 10}]);
})
