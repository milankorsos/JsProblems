/*

There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by
rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball
stops, it could choose the next direction.

Given the ball's start position, the destination and the maze, determine whether the ball could
stop at the destination.

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You
may assume that the borders of the maze are all walls. The start and destination coordinates are
represented by row and column indexes.

Note:
- There is only one ball and one destination in the maze.
- Both the ball and the destination exist on an empty space, and they will not be at the same
position initially.
- The given maze does not contain border (like the red rectangle in the example pictures), but
you could assume the border of the maze are all walls.
- The maze contains at least 2 empty spaces, and both the width and height of the maze won't
exceed 100.

https://leetcode.com/problems/the-maze/

*/

// Return cell coords when rolling up
const rollUp = function(maze, x, y) {
  const canMoveUp = (x, y) => x - 1 >= 0 && maze[x - 1][y] === 0; // !wall & !out of bounds
  let xNew = x;
  while (canMoveUp(xNew, y)) {
    xNew--;
  }
  return [xNew, y];
}

// Return cell coords when rolling down
const rollDown = function(maze, x, y) {
  const canMoveDown = (x, y) => x + 1 < maze.length && maze[x + 1][y] === 0; // !wall & !oobounds
  let xNew = x;
  while (canMoveDown(xNew, y)) {
    xNew++;
  }
  return [xNew, y];
}

// Return cell coords when rolling left
const rollLeft = function(maze, x, y) {
  const canMoveLeft = (x, y) => y - 1 >= 0 && maze[x][y - 1] === 0; // !wall & !oobounds
  let yNew = y;
  while (canMoveLeft(x, yNew)) {
    yNew--;
  }
  return [x, yNew];
}

// Return cell coords when rolling right
const rollRight = function(maze, x, y) {
  const canMoveRight = (x, y) => y + 1 < maze[0].length && maze[x][y + 1] === 0; //!wall & !oobounds
  let yNew = y;
  while (canMoveRight(x, yNew)) {
    yNew++;
  }
  return [x, yNew];
}

// Depth first search (less memory usage than BFS)
const dfs = function(maze, start, destination, visited) {
  // Found destination!
  if ((start[0] === destination[0]) && (start[1] === destination[1])) {
    return true;
  }

  const x = start[0];
  const y = start[1];

  // Check if already visited
  if (visited[x][y] === 1) {
    return false;
  } else {
    visited[x][y] = 1;
  }

  // Find last cell and do DFS from there

  // UP
  const startUp = rollUp(maze, x, y);
  const resultUp = dfs(maze, [startUp[0], startUp[1]], destination, visited);

  // DOWN
  const startDown = rollDown(maze, x, y);
  const resultDown = dfs(maze, [startDown[0], startDown[1]], destination, visited);

  // LEFT
  const startLeft = rollLeft(maze, x, y);
  const resultLeft = dfs(maze, [startLeft[0], startLeft[1]], destination, visited);

  // RIGHT
  const startRight = rollRight(maze, x, y);
  const resultRight = dfs(maze, [startRight[0], startRight[1]], destination, visited);

  return resultUp || resultDown || resultLeft || resultRight;
}

// Check if there is path between start & destination with rolling balls
const hasPath = function(grid, start, destination) {
  // Keep track of blocks where we already started rolling from
  const visited = [];
  for (let i = 0; i < grid.length; i++) {
    visited.push(new Array(grid[0].length).fill(0));
  }

  return dfs(grid, start, destination, visited);
};

export default hasPath;
