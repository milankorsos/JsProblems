/*
  You have a linked list ↴ and want to find the kth to last node.

  Write a function kthToLastNode() that takes an integer k and the headNode of a singly linked list,
  and returns the kth to last node in the list.

  https://www.interviewcake.com/question/javascript/kth-to-last-node-in-singly-linked-list
*/

import LinkedList from '../dataStructures/LinkedList';

LinkedList.prototype.kthToLast = function(k, head = this.head) {
  let node;

  // Get length
  let length = 0;
  node = head;
  while (node) {
    length++;
    node = node.next;
  }

  // Get to kth element
  if (length - k >= 0) {
    node = head;
  } else {
    node = null;
  }
  for (let i = 1; i < length - k; i++) {
    node = node.next;
  }

  return node ? node.value : null;
}

export default LinkedList;
