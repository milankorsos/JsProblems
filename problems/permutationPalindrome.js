/*
  Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome.

  You can assume the input string only contains lowercase letters.

  Examples:

  "civic" should return true
  "ivicc" should return true
  "civil" should return false
  "livci" should return false

*/


const permutationPalindrome = function(str) {
  if (!str) {
    return false;
  }

  const unpairedChars = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (unpairedChars.has(char)) {
      unpairedChars.delete(char);
    } else {
      unpairedChars.add(char);
    }
  }

  return unpairedChars.size <= 1;
}

export default permutationPalindrome;
