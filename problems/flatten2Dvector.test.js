import Iterator from './flatten2Dvector';

describe('airbnb 1', () => {
  const arr = [[1, 2, 3], [4]];

  const i = new Iterator(arr);

  test('first', () => {
    expect(i.hasNext()).toEqual(true);
    expect(i.next()).toEqual(1);
  });

  test('second', () => {
    expect(i.hasNext()).toEqual(true);
    expect(i.next()).toEqual(2);
  });

  test('thrid', () => {
    expect(i.hasNext()).toEqual(true);
    expect(i.next()).toEqual(3);
  });

  test('forth', () => {
    expect(i.hasNext()).toEqual(true);
    expect(i.next()).toEqual(4);
  });

  test('fifth', () => {
    expect(i.hasNext()).toEqual(false);
    expect(i.next()).toEqual(null);
  });
})

describe('airbnb 2', () => {
  const arr = [];

  const i = new Iterator(arr);

  test('first', () => {
    expect(i.hasNext()).toEqual(false);
    expect(i.next()).toEqual(null);
  });
})

describe('airbnb 3', () => {
  const arr = [[1],[],[2]];

  const i = new Iterator(arr);

  test('first', () => {
    expect(i.hasNext()).toEqual(true);
    expect(i.next()).toEqual(1);
  });

  test('second', () => {
    expect(i.hasNext()).toEqual(true);
    expect(i.next()).toEqual(2);
  });

  test('third', () => {
    expect(i.hasNext()).toEqual(false);
    expect(i.next()).toEqual(null);
  });

})

describe('airbnb 4', () => {
  const arr = [[], [], []];

  const i = new Iterator(arr);

  test('first', () => {
    expect(i.hasNext()).toEqual(false);
    expect(i.next()).toEqual(null);
  });

})
