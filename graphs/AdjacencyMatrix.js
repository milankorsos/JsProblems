/*
  Graph represented with Adjacency Matrix
  - Storage: O(V^2)
  - Query: O(1)
*/
const Graph = function() {
  this.matrix = [];
};

/*
  Print graph matrix
*/
Graph.prototype.print = function() {
  return this.matrix;
};

/*
  Add vertex to graph
  - O(V^2)
*/
Graph.prototype.addVertex = function() {
  this.matrix.forEach(row => {
    row.push(0);
  });
  const newRow = new Array(this.matrix.length + 1);
  newRow.fill(0);
  this.matrix.push(newRow);
};

/*
  Add edge to graph
  - O(1)
*/
Graph.prototype.addEdge = function(vertexA, vertexB) {
  this.matrix[vertexA][vertexB] = 1;
};

/*
  Get children
  - private
*/
Graph.prototype._getChildren = function(vertex) {
  const row = this.matrix[vertex];
  const children = [];

  for (let i = 0; i < row.length; i++) {
    const value = row[i];
    if (value === 1) {
      children.push(i);
    }
  }
  return children;
}

/*
  DFS Traversal
  - preferred for visiting all vertexes
  - faster, less memory usage
  - might find suboptimal shortest path
  - O(|E|+|V|)
*/
Graph.prototype.dfs = function(root, results = []) {
  // If root is already in results dont explore that tree
  if (results.indexOf(root) !== -1) {
    return false;
  }

  // Add root to results
  results.push(root);

  // Iterate through children & do DFS on them
  this._getChildren(root).forEach(vertex => {
    if (results.indexOf(vertex) === -1) {
      this.dfs(vertex, results);
    }
  })

  return results;
}

/*
  BFS Traversal
  - use Queue
  - find shortest path
  - could be memory intensive
  - O(|E|+|V|)
*/
Graph.prototype.bfs = function(rootVertex) {
  const queue = []; // use queue.push() & queue.shift()
  const results = [];

  // Add root to queue
  queue.push(rootVertex);

  // Keep searching until Q is empty
  while (queue.length) {
    const vertex = queue.shift();

    // Add current one to results if not added yet
    if (results.indexOf(vertex) === -1) {
      results.push(vertex);
    }

    // Add children to queue if not visited yet
    this._getChildren(vertex).forEach(child => {
      if (results.indexOf(child) === -1) {
        queue.push(child);
      }
    });
  }

  return results;
}

export default Graph;
