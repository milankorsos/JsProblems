import LRUCache from './LRUCache';

describe('LRUCache', () => {
  const cache = new LRUCache(2);

  test('put & get', () => {
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toEqual(1);
  });

  test('evicts key 2', () => {
    cache.put(3, 3);
    expect(cache.get(2)).toEqual(-1);
  });

  test('evicts key 1', () => {
    cache.put(4, 4);
    expect(cache.get(1)).toEqual(-1);
  });

  test('returns 3', () => {
    expect(cache.get(3)).toEqual(3);
  });

  test('returns 4', () => {
    expect(cache.get(4)).toEqual(4);
  });

});
