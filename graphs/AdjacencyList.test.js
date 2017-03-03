import Graph from './AdjacencyList';

const graph = new Graph();

test('starts with empty list', () => {
  expect(graph.print()).toEqual({});

});

test('addVertex adds new vertexes', () => {
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addVertex(4);
  graph.addVertex(5);
  graph.addVertex(6);

  expect(graph.print()).toEqual({
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': []
  });
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

  expect(graph.print()).toEqual({
    '1': [2, 5],
    '2': [1, 3, 5],
    '3': [2, 4],
    '4': [3, 5, 6],
    '5': [1, 2, 4],
    '6': [4]
  });
});

test('DFS', () => {
  expect(graph.dfs(1)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('BFS', () => {
  expect(graph.bfs(1)).toEqual([1, 2, 5, 3, 4, 6]);
});
