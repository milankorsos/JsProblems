import perfectSquares from './perfectSquares';

xtest('given n = 12, return 3 because 12 = 4 + 4 + 4;', () => {
  expect(perfectSquares(12)).toEqual(3);
})

xtest('given n = 13, return 2 because 12 = 4 +9;', () => {
  expect(perfectSquares(13)).toEqual(2);
})
