/*
  Write a recursive function for generating all permutations of an input string. Return them as a set.
  Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

  To start, assume every character in the input string is unique.

  Your function can have loops—it just needs to also be recursive.

  https://www.interviewcake.com/question/javascript/recursive-string-permutations
*/

const stringPermutations = function(string, prefix = '') {
  // Base cases
  if (!string) {
    return new Set();
  }

  if (string.length === 1) {
    return new Set([prefix + string]);
  }

  // Recursive cases
  const results = new Set();

  const chars = string.split('');
  chars.forEach(char => {
    const charsExceptCurrent = chars.filter(item => item !== char);

    const permutations = stringPermutations(charsExceptCurrent.join(''), prefix + char);
    permutations.forEach(permutation => {
      results.add(permutation);
    })
  });

  return results;
};


export default stringPermutations;
