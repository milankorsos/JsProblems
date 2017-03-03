import Graph from './AdjacencyMatrix';

const graph = new Graph();

// Set up a second graph for testing
const graph2 = new Graph();

graph2.addVertex();
graph2.addVertex();
graph2.addVertex();
graph2.addVertex();
graph2.addVertex();
graph2.addVertex();
graph2.addVertex();

graph2.addEdge(4, 6);
graph2.addEdge(6, 5);
graph2.addEdge(5, 4);

graph2.addEdge(1, 2);
graph2.addEdge(2, 3);
graph2.addEdge(3, 2);
graph2.addEdge(2, 0);
graph2.addEdge(0, 1);


test('starts with empty matrix', () => {
  expect(graph.print()).toEqual([]);

});

test('addVertex adds new vertexes', () => {
  graph.addVertex();
  graph.addVertex();
  graph.addVertex();
  graph.addVertex();
  graph.addVertex();
  graph.addVertex();

  expect(graph.print()).toEqual([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);
});

test('addEdge adds new edges', () => {
  graph.addEdge(5, 3);

  graph.addEdge(4, 3);
  graph.addEdge(4, 1);
  graph.addEdge(4, 0);

  graph.addEdge(3, 5);
  graph.addEdge(3, 4);
  graph.addEdge(3, 2);

  graph.addEdge(2, 3);
  graph.addEdge(2, 1);

  graph.addEdge(1, 2);
  graph.addEdge(1, 4);
  graph.addEdge(1, 0);

  graph.addEdge(0, 4);
  graph.addEdge(0, 1);

  expect(graph.print()).toEqual([
    [0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
  ]);
});

test('_getChildren', () => {
  expect(graph._getChildren(0)).toEqual([1, 4]);
  expect(graph._getChildren(3)).toEqual([2, 4, 5]);
  expect(graph._getChildren(4)).toEqual([0, 1, 3]);
});

test('DFS', () => {
  // First graph
  expect(graph.dfs(0)).toEqual([0, 1, 2, 3, 4, 5]);

  // Second graph
  expect(graph2.dfs(4)).toEqual([4, 6, 5]);
  expect(graph2.dfs(2)).toEqual([2, 0, 1, 3]);
});

test('BFS', () => {
  // First graph
  expect(graph.bfs(0)).toEqual([0, 1, 4, 2, 3, 5]);

  // Second graph
  expect(graph2.bfs(4)).toEqual([4, 6, 5]);
  expect(graph2.bfs(2)).toEqual([2, 0, 3, 1]);
});




