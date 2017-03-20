/*
  Given a positive integer n, find the least number of perfect square numbers
  (for example, 1, 4, 9, 16, ...) which sum to n.

  For example,
    given n = 12, return 3 because 12 = 4 + 4 + 4;
    given n = 13, return 2 because 13 = 4 + 9.

    https://leetcode.com/problems/perfect-squares/?
*/


const perfectSquares = function(n) {
  // Nums has all the avilable digits
  const squares = [];
  for (let i = Math.floor(Math.sqrt(n)); i > 0; i--) {
    squares.push(i*i);
  }

  // 1. BUILD GRAPH
  const list = {};
  const queue = []; // q.unshift(), q.pop()

  // add first level
  queue.unshift(0);
  list[0] = [];

  while (queue.length) {
    const nodeIndex = queue.pop();
    const node = list[nodeIndex];

    // Try adding children
    for (let i = 0; i < squares.length; i++) {
      const childNodeIndex = node + squares[i];
      if (childNodeIndex === n) {
        node.push(childNodeIndex);
        if (!list[childNodeIndex]) {
          list[childNodeIndex] = [];
        }
        queue.unshift(childNodeIndex);
        return;
      }

      if (childNodeIndex < n) {
        node.push(childNodeIndex);
        if (!list[childNodeIndex]) {
          list[childNodeIndex] = [];
        }
        queue.unshift(childNodeIndex);
      }
    }


    console.log('list', list)
    // // try adding all 3 numbers. if larger, dont add. if exact match then stop
    // for (let i = 0; i < squares.length; i++) {
    //   console.log('try adding', squares[i], 'to', node);

    //   if (newNode === n) {
    //     console.log('newNode bingo', newNode)
    //     return true
    //   } else if (newNode < n) {
    //     if (!graph[node]) {
    //       graph[node] = [];
    //     }
    //     if (!graph[newNode]) {
    //       graph[newNode] = [];
    //     }
    //     graph[node].push(newNode);


    //     queue.push(newNode);
    //   }
    // }

  }




  // graph[0] = nums;




  // console.log(graph);

  // then start doing breadth first traverse & trying to add


  // Need to iterate through them in every possible combination and find the shortest version

  // Idea: lets build a tree * use BFS to find shortest combination. Tree should add up to n;


  // Start with nums and go breadth first from there trying to build a tree until its smaller than n

  /*
  start: [9, 4, 1]
  9: [10]   // only adding
  10: [11]
  11: [12]
  4: [8, 9]   // adding 4s and 1s
  8: [12, 9]


  */

  // if match then thats our current breadh


};

export default perfectSquares;
