/*
  Graph represented with Adjacency List
  - Storage: O(V + E)
  - Query: O(V)
*/
const Graph = function() {
  this.vertices = {};
};

/*
  Print graph list
*/
Graph.prototype.print = function() {
  return this.vertices;
};

/*
  Add vertex to graph
  - O(1)
*/
Graph.prototype.addVertex = function(vertex) {
  if (!this.vertices[vertex]) {
    this.vertices[vertex] = [];
  }
};

/*
  Add edge to graph
  - O(1)
*/
Graph.prototype.addEdge = function(vertexA, vertexB) {
  const vertex = this.vertices[vertexA];
  if (vertex) {
    if (vertex.indexOf(vertexB) === -1) {
      vertex.push(vertexB);
      vertex.sort();
    }
  }
};

/*
  DFS Traversal
  - preferred for visiting all vertexes
  - faster, less memory usage
  - might find suboptimal shortest path
  - O(|E|+|V|)
*/
Graph.prototype.dfs = function(root, results = []) {
  // If its already visited then return
  if (results.indexOf(root) !== -1) {
    return false;
  }

  // Add root to results
  results.push(root);

  // Do DFS on children
  this.vertices[root].forEach(child => {
    this.dfs(child, results);
  })

  return results;
};

/*
  BFS Traversal
  - use Queue
  - find shortest path
  - could be memory intensive
  - O(|E|+|V|)
*/
Graph.prototype.bfs = function(root) {
  const queue = []; // use queue.unshift() & queue.pop()
  const results = [];

  // Add root to queue
  queue.unshift(root);

  // Keep traversing until queue is empty
  while (queue.length) {
    const vertex = queue.pop();

    // Add vertex to results
    if (results.indexOf(vertex) === -1) {
      results.push(vertex);
    }

    // Add children to queue
    this.vertices[vertex].forEach(child => {
      if (results.indexOf(child) === -1) {
        queue.unshift(child);
      }
    });
  }

  return results;
};

/*
  See if path exists between two vertices
  - use BFS (with Queue)
*/
Graph.prototype.isPath = function(vertexA, vertexB) {
  const queue = []; // use queue.pop() & queue.unshift()
  const path = [];

  queue.unshift(vertexA);

  while (queue.length) {
    const vertex = queue.pop();

    // If found it, return
    if (vertex === vertexB) {
      return true;
    }

    // Push current vertex to path
    if (path.indexOf(vertex) === -1) {
      path.push(vertex);
    }

    this.vertices[vertex].forEach(child => {
      if (path.indexOf(child) === -1) {
        queue.unshift(child);
      }
    });
  }
  return false;
};

export default Graph;
