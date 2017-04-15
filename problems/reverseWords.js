/*
  Write a function to reverse a string in-place.
  https://www.interviewcake.com/question/javascript/reverse-string-in-place

  Write a function reverseWords() that takes a string message and reverses the order of the words in-place.
  https://www.interviewcake.com/question/javascript/reverse-words
*/

export function reverseString(string) {
  const chars = string.split('');

  for (let startIndex = 0; startIndex < Math.floor(chars.length / 2); startIndex++) {
    const endIndex = chars.length - startIndex - 1;

    const temp = chars[startIndex];
    chars[startIndex] = chars[endIndex];
    chars[endIndex] = temp;
  }

  return chars.join('');
}


export function reverseWords(message) {
  // For the spirit of the challenge we are not using message.split(' ') & message.join(' ')

  // Reverse all the characters O(n)
  const reverse = reverseString(message);

  // Go through the string and fix the order of chars in every word O(n)
  const chars = reverse.split('');
  let startIndex = 0;
  for (let endIndex = 0; endIndex < chars.length; endIndex++) {

    // If deliminator or end of string, reverse the word
    if (chars[endIndex] === ' ' || endIndex === chars.length - 1) {

      for (let j = 0; j < Math.floor(endIndex - startIndex / 2); j++) {
        const temp = chars[startIndex + j];
        chars[startIndex + j] = chars[endIndex - j - 1];
        chars[endIndex - j - 1] = temp;
      }

      // set startIndex to i + 1 (new start)
      startIndex = endIndex + 1;
    }
  }
  return chars.join('');
}
