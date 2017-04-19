import DoubleLinkedList from './DoubleLinkedList';

describe('DoubleLinkedList', () => {

  const list = new DoubleLinkedList();

  describe('empty list', () => {
    test('print', () => {
      expect(list.print()).toEqual('');
    });

    test('printReverse', () => {
      expect(list.print()).toEqual('');
    });

    test('length', () => {
      expect(list.print()).toEqual('');
    });
  });

  describe('add', () => {
    test('first', () => {
      list.add(1);
      expect(list.print()).toEqual('1');
      expect(list.printReverse()).toEqual('1');
      expect(list.length()).toEqual(1);
    });

    test('more', () => {
      list.add(2);
      list.add(3);
      list.add(4);
      expect(list.print()).toEqual('1 2 3 4');
      expect(list.printReverse()).toEqual('4 3 2 1');
      expect(list.length()).toEqual(4);
    });
  });

  describe('remove', () => {
    test('value', () => {
      list.remove(3);
      expect(list.print()).toEqual('1 2 4');
      expect(list.printReverse()).toEqual('4 2 1');
      expect(list.length()).toEqual(3);
    });

    test('head', () => {
      list.remove(1);
      expect(list.print()).toEqual('2 4');
      expect(list.printReverse()).toEqual('4 2');
      expect(list.length()).toEqual(2);
      expect(list.head.value).toEqual(2);
    });

    test('non-existing', () => {
      list.remove(11);
      expect(list.print()).toEqual('2 4');
      expect(list.printReverse()).toEqual('4 2');
      expect(list.length()).toEqual(2);
      expect(list.head.value).toEqual(2);
    });

    test('tail', () => {
      list.remove(4);
      expect(list.print()).toEqual('2');
      expect(list.printReverse()).toEqual('2');
      expect(list.length()).toEqual(1);
      expect(list.head.value).toEqual(2);
      expect(list.tail.value).toEqual(2);
    });

    test('single item', () => {
      list.remove(2);
      expect(list.print()).toEqual('');
      expect(list.printReverse()).toEqual('');
      expect(list.length()).toEqual(0);
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);
    });
  });

  describe('insertAfter', () => {

    test('insert 3 after 2', () => {
      list.add(2);
      list.add(6);

      list.insertAfter(3, 2);
      expect(list.print()).toEqual('2 3 6');
      expect(list.printReverse()).toEqual('6 3 2');
      expect(list.length()).toEqual(3);
    });

    test('insert 4 after 3', () => {
      list.insertAfter(4, 3);
      expect(list.print()).toEqual('2 3 4 6');
      expect(list.printReverse()).toEqual('6 4 3 2');
      expect(list.length()).toEqual(4);
    });

    test('do not insert after a non-existing one', () => {
      list.insertAfter(5, 9);
      expect(list.print()).toEqual('2 3 4 6');
      expect(list.printReverse()).toEqual('6 4 3 2');
      expect(list.length()).toEqual(4);
    });

    test('insert 5 after 4', () => {
      list.insertAfter(5, 4);
      expect(list.print()).toEqual('2 3 4 5 6');
      expect(list.printReverse()).toEqual('6 5 4 3 2');
      expect(list.length()).toEqual(5);
    });

    test('insert 7 after 6 (tail)', () => {
      list.insertAfter(7, 6);
      expect(list.print()).toEqual('2 3 4 5 6 7');
      expect(list.printReverse()).toEqual('7 6 5 4 3 2');
      expect(list.length()).toEqual(6);
      expect(list.tail.value).toEqual(7);
    });
  });

});
