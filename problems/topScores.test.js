import sortScores from './topScores';

test('sortScores', () => {
  var unsortedScores = [37, 89, 41, 65, 91, 53];
  const HIGHEST_POSSIBLE_SCORE = 100;

  expect(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)).toEqual([37, 41, 53, 65, 89, 91]);
})
