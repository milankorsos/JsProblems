/*
  You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears
  in the body of text.

  To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map,
  where the keys are words and the values are the number of times the words occurred.

  Assume the input will only contain words and standard punctuation.

  https://www.interviewcake.com/question/javascript/word-cloud

*/

const WordCount = function(inputString) {
  this.wordMap = new Map();
  this.createMap(inputString);
}

WordCount.prototype.isLetter = function(char) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) !== -1;
}

WordCount.prototype.splitWords = function(string) {
  const words = [];
  let currentWord = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (this.isLetter(char) || char === `'`) {
      currentWord += char;
    } else if (currentWord.length) {
      words.push(currentWord);
      currentWord = '';
    }
  }

  // Push last currentword
  if (currentWord) {
    words.push(currentWord);
  }

  return words;
}

WordCount.prototype.createMap = function(string) {
  const words = this.splitWords(string);

  words.forEach(word => {
    const count = this.wordMap.has(word) ? this.wordMap.get(word) + 1 : 1;
    this.wordMap.set(word.toLowerCase(), count);
  });
}


WordCount.prototype.get = function() {
  return this.wordMap;
}

export default WordCount;
