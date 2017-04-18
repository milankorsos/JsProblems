/*
  You rank players in the game from highest to lowest score. So far you're using an algorithm
  that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't
  updated fast enough. You need a faster sorting algorithm.

  Write a function that takes:

    1. an array of unsortedScores
    2. the highestPossibleScore in the game

  and returns a sorted array of scores in less than O(nlgn) time.

  For example:

  var unsortedScores = [37, 89, 41, 65, 91, 53];
  const HIGHEST_POSSIBLE_SCORE = 100;

  sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
  // returns [37, 41, 53, 65, 89, 91]

  We’re defining n as the number of unsortedScores because we’re expecting the number of players to keep climbing.

  And we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs,
  because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores
  will stay around the same order of magnitude.

*/


const sortScores = function(unsortedScores, HIGHEST_POSSIBLE_SCORE) {
  const scores = new Array(HIGHEST_POSSIBLE_SCORE).fill(0);

  // fill up scores with count of scores O(n)
  for (let i = 0; i < unsortedScores.length; i++) {
    const score = unsortedScores[i];
    scores[score]++;
  }

  // Iterate through the scores O(1) bc HIGHEST_POSSIBLE_SCORE is O(1)
  const sortedScores = [];
  for (let i = 0; i < HIGHEST_POSSIBLE_SCORE; i++) {
    const score = i;
    const value = scores[i];
    for (let j = 0; j < value; j++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}

export default sortScores;
