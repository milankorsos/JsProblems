const Graph = function() {
  this.matrix = [];
};

Graph.prototype.print = function() {
  return this.matrix;
};

Graph.prototype.addVertex = function() {
  this.matrix.forEach(row => {
    row.push(0);
  });
  const newRow = new Array(this.matrix.length + 1);
  newRow.fill(0);
  this.matrix.push(newRow);
};

Graph.prototype.addEdge = function(vertexA, vertexB) {
  this.matrix[vertexA - 1][vertexB - 1] = 1;
};

Graph.prototype.getChildren = function(vertex) {
  const vertexIndex = vertex - 1;
  const row = this.matrix[vertexIndex];
  const children = [];

  for (let i = 0; i < row.length; i++) {
    const value = row[i];
    const vertex = i + 1;
    if (value === 1) {
      children.push(vertex);
    }
  }
  return children;
}

Graph.prototype.dfs = function(rootVertex, results = []) {
  results.push(rootVertex);

  // Iterate through children vertices & do DFS on them
  const children = this.getChildren(rootVertex);
  children.forEach(vertex => {
    // If not visited, explore vertex's children
    const visited = results.indexOf(vertex) !== -1;
    if (!visited) {
      this.dfs(vertex, results);
    }
  })

  return results;
}


Graph.prototype.bfs = function(rootVertex) {
  const queue = []; // use queue.push() & queue.shift()
  const results = [];

  // Add root to queue
  queue.push(rootVertex);

  // Keep searching until Q is empty
  while (queue.length) {
    const vertex = queue.shift();
    const children = this.getChildren(vertex);

    // Add current one to results if not added yet
    const visited = results.indexOf(vertex) !== -1;
    if (!visited) {
      results.push(vertex);
    }

    // Add children to queue if not visited yet
    children.forEach(child => {
      const visitedChild = results.indexOf(child) !== -1;
      if (!visitedChild) {
        queue.push(child);
      }
    });
  }

  return results;
}

export default Graph;
