import WordCount from './wordCount';

describe('wordCount', () => {

  test('first', () => {

    let text;
    text = 'After beating the eggs, Dana read the next step:';
    text += 'Add milk and eggs, then add flour and sugar';

    const expected = new Map([
      ['after', 1],
      ['beating', 1],
      ['the', 2],
      ['eggs', 2],
      ['dana', 1],
      ['read', 1],
      ['next', 1],
      ['step', 1],
      ['add', 2],
      ['milk', 1],
      ['and', 2],
      ['then', 1],
      ['flour', 1],
      ['sugar', 1]
    ]);

    expect(new WordCount(text).get()).toEqual(expected);
  });

  test('second', () => {
    let text;
    text = `We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake.`;
    text += `The bill came to five dollars.`;

    const expected = new Map([
      ['we', 4],
      ['came', 2],
      ['saw', 1],
      ['conquered', 1],
      ['then', 1],
      ['ate', 1],
      [`bill's`, 1],
      ['mille', 1],
      ['feuille', 1],
      ['cake', 1],
      ['the', 1],
      ['bill', 1],
      ['to', 1],
      ['five', 1],
      ['dollars', 1]
    ]);

    expect(new WordCount(text).get()).toEqual(expected);
  });
})
