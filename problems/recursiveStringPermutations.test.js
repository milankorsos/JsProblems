import stringPermutations from './recursiveStringPermutations';

describe('stringPermutations', () => {

  test('empty', () => {
    expect(stringPermutations('')).toEqual(new Set([]));
  });

  test('one', () => {
    expect(stringPermutations('a')).toEqual(new Set(['a']));
  });

  test('two', () => {
    expect(stringPermutations('ab')).toEqual(new Set(['ab', 'ba']));
  });

  test('three', () => {
    expect(stringPermutations('abc')).toEqual(new Set(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
  });

})
