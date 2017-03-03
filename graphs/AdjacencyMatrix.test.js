import Graph from './AdjacencyMatrix';

const graph = new Graph();

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
  graph.addEdge(6, 4);
  graph.addEdge(6, 4);

  graph.addEdge(5, 4);
  graph.addEdge(5, 2);
  graph.addEdge(5, 1);

  graph.addEdge(4, 6);
  graph.addEdge(4, 5);
  graph.addEdge(4, 3);

  graph.addEdge(3, 4);
  graph.addEdge(3, 2);

  graph.addEdge(2, 3);
  graph.addEdge(2, 5);
  graph.addEdge(2, 1);

  graph.addEdge(1, 5);
  graph.addEdge(1, 2);

  expect(graph.print()).toEqual([
    [0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
  ]);
});

test('getChildren', () => {
  expect(graph.getChildren(1)).toEqual([2, 5]);
  expect(graph.getChildren(4)).toEqual([3, 5, 6]);
  expect(graph.getChildren(5)).toEqual([1, 2, 4]);
});

test('DFS', () => {
  expect(graph.dfs(1)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('BFS', () => {
  expect(graph.bfs(1)).toEqual([1, 2, 5, 3, 4, 6]);
});
