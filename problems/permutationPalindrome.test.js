import permutationPalindrome from './permutationPalindrome';

describe('permutationPalindrome', () => {

  test('first', () => {
    expect(permutationPalindrome('civic')).toEqual(true);
  });

  test('second', () => {
    expect(permutationPalindrome('ivicc')).toEqual(true);
  });

  test('third', () => {
    expect(permutationPalindrome('civil')).toEqual(false);
  });

  test('forth', () => {
    expect(permutationPalindrome('livci')).toEqual(false);
  });


});
