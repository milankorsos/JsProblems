import LRUCache, { Node, DoubleLinkedList } from './LRUCache';

describe('LinkedList', () => {

  describe('addFirst', () => {
    const list = new DoubleLinkedList();

    const node1 = new Node(1, 1);
    const node2 = new Node(2, 2);
    const node3 = new Node(3, 3);

    test('first', () => {
      list.addFirst(node1); // *first* -> node1 <- *last*
      expect(list.first).toEqual(node1);
      expect(list.last).toEqual(node1);

      expect(node1.prev).toEqual(null);
      expect(node1.next).toEqual(null);

      expect(list.length).toEqual(1);
    });

    test('second', () => {
      list.addFirst(node2); // *first* -> node2 <-> node1 <- *last*
      expect(list.first).toEqual(node2);
      expect(list.last).toEqual(node1);

      expect(node2.prev).toEqual(null);
      expect(node2.next).toEqual(node1);

      expect(node1.prev).toEqual(node2);
      expect(node1.next).toEqual(null);

      expect(list.length).toEqual(2);
    });

    test('third', () => {
      list.addFirst(node3); // *first* -> node3 <-> node2 <-> node1 <- *last*
      expect(list.first).toEqual(node3);
      expect(list.last).toEqual(node1);

      expect(node3.prev).toEqual(null);
      expect(node3.next).toEqual(node2);

      expect(node2.prev).toEqual(node3);
      expect(node2.next).toEqual(node1);

      expect(node1.prev).toEqual(node2);
      expect(node1.next).toEqual(null);

      expect(list.length).toEqual(3);
    });
  });

  describe('removeItem', () => {
    const list = new DoubleLinkedList(4);

    const node1 = new Node(1, 1);
    const node2 = new Node(2, 2);
    const node3 = new Node(3, 3);
    const node4 = new Node(4, 4);

    list.addFirst(node1);
    list.addFirst(node2);
    list.addFirst(node3);
    list.addFirst(node4);
    // *first* -> node4 <-> node3 <-> node2 <-> node1 <- *last*

    test('middle', () => {
      list.remove(node2); // *first* -> node4 <-> node3 <-> node1 <- *last*

      expect(list.first).toEqual(node4);
      expect(list.last).toEqual(node1);

      expect(node3.next).toEqual(node1);

      expect(node1.prev).toEqual(node3);

      expect(list.length).toEqual(3)

    });

    test('last', () => {
      list.remove(node1); // *first* -> node4 <-> node3 <- *last*

      expect(list.first).toEqual(node4);
      expect(list.last).toEqual(node3);

      expect(node4.prev).toEqual(null);
      expect(node4.next).toEqual(node3);

      expect(node3.prev).toEqual(node4);
      expect(node3.next).toEqual(null);

      expect(list.length).toEqual(2)

    });

    test('first', () => {
      list.remove(node4); // *first* -> node3 <- *last*

      expect(list.first).toEqual(node3);
      expect(list.last).toEqual(node3);

      expect(node3.next).toEqual(null);

      expect(node3.prev).toEqual(null);

      expect(list.length).toEqual(1)
    });

    test('only item', () => {
      list.remove(node3); // *first* ->  <- *last*

      expect(list.first).toEqual(null);
      expect(list.last).toEqual(null);

      expect(list.length).toEqual(0)
    });
  });
});

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


describe('LRUCache2', () => {
  const cache = new LRUCache(10);

  test('LeetCode ', () => {
    cache.put(10,13);
    cache.put(3,17);
    cache.put(6,11);
    cache.put(10,5);
    cache.put(9,10);
    expect(cache.get(13)).toEqual(-1);
    cache.put(2,19);
    expect(cache.get(2)).toEqual(19);
    expect(cache.get(3)).toEqual(17);
    cache.put(5,25);
    expect(cache.get(8)).toEqual(-1);
    cache.put(9,22);
    cache.put(5,5);
    cache.put(1,30);
    expect(cache.get(11)).toEqual(-1);
    cache.put(9,12);
    expect(cache.get(7)).toEqual(-1);
    expect(cache.get(5)).toEqual(5);
    expect(cache.get(8)).toEqual(-1);
    expect(cache.get(9)).toEqual(12);
    cache.put(4,30);
    cache.put(9,3);
    expect(cache.get(9)).toEqual(3);
    expect(cache.get(10)).toEqual(5);
    expect(cache.get(10)).toEqual(5);
    cache.put(6,14);
    cache.put(3,1);
    expect(cache.get(3)).toEqual(1);
    cache.put(10,11);
    expect(cache.get(8)).toEqual(-1);
    cache.put(2,14);
    expect(cache.get(1)).toEqual(30);
    expect(cache.get(5)).toEqual(5);
    expect(cache.get(4)).toEqual(30);
    cache.put(11,4);
    cache.put(12,24);
    cache.put(5,18);
    expect(cache.get(13)).toEqual(-1);
    cache.put(7,23);
    expect(cache.get(8)).toEqual(-1);
    expect(cache.get(12)).toEqual(24);
    cache.put(3,27);
    cache.put(2,12);
    expect(cache.get(5)).toEqual(18);
    cache.put(2,9);
    cache.put(13,4);
    cache.put(8,18);
    cache.put(1,7);
    expect(cache.get(6)).toEqual(-1);
  });

});
