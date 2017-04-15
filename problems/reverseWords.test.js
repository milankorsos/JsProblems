import { reverseString, reverseWords } from './reverseWords';

describe('reverseString', () => {

  test('empty', () => {
    expect(reverseString('')).toEqual('');
  });

  test('one', () => {
    expect(reverseString('a')).toEqual('a');
  });

  test('two', () => {
    expect(reverseString('ab')).toEqual('ba');
  });

  test('long', () => {
    expect(reverseString('hello world!')).toEqual("!dlrow olleh");
  });

});

describe('reverseWords', () => {

  test('empty', () => {
    expect(reverseWords('')).toEqual('');
  });

  test('one', () => {
    expect(reverseWords('a')).toEqual('a');
  });

  test('two', () => {
    expect(reverseWords('a b')).toEqual('b a');
  });

  test('long', () => {
    expect(
      reverseWords('find you will pain only go you recordings security the into if')
    ).toEqual('if into the security recordings you go only pain will you find');
  });

});
