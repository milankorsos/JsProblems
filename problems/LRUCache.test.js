import LRUCache, { Node, DoubleLinkedList } from './LRUCache';

xdescribe('LinkedList', () => {

  describe('addFirst', () => {
    const list = new DoubleLinkedList();

    const node1 = new Node(1, 1);
    const node2 = new Node(2, 2);

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

xdescribe('LRUCache', () => {
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

  test('LeetCode fail', () => {
    cache.put(10,13);
    cache.put(3,17);
    cache.put(6,11);
    cache.put(10,5);
    cache.put(9,10);
    cache.get(13);
    cache.put(2,19);
    cache.get(2);
    cache.get(3);
    cache.put(5,25);
    cache.get(8);
    cache.put(9,22);
    cache.put(5,5);
    cache.put(1,30);
    cache.put(11);
    cache.put(9,12);
    cache.get(7);
    cache.get(5);
    cache.get(8);
    cache.get(9);
    cache.put(4,30);
    cache.put(9,3);
    cache.get(9);
    cache.get(10);
    cache.get(10);
    cache.put(6,14);
    cache.put(3,1);
    cache.get(3);
    cache.put(10,11);
    cache.get(8);
    cache.put(2,14);
    cache.get(1);
    cache.get(5);
    cache.get(4);
    cache.put(11,4);
    cache.put(12,24);
    cache.put(5,18);
    cache.get(13);
    cache.put(7,23);
    cache.get(8);
    cache.get(12);
    cache.put(3,27);
    cache.put(2,12);
    cache.get(5);
    cache.put(2,9);
    cache.put(13,4);
    cache.put(8,18);
    cache.put(1,7);
    expect(cache.get(6)).toEqual(-1);
  });

});
