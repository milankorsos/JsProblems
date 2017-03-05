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

const dfs = function(grid, start, destination, visited) {
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

  // Find last cell

  // NORTH
  const canMoveNorthFrom = (x, y) => x - 1 >= 0 && grid[x - 1][y] === 0; // !wall & !out of bounds

  let xN = x;
  while (canMoveNorthFrom(xN, y)) {
    xN--;
  }
  const resultN = dfs(grid, [xN, y], destination, visited);

  // SOUTH
  const canMoveSouthFrom = (x, y) => x + 1 < grid.length && grid[x + 1][y] === 0;
  let xS = x;
  while (canMoveSouthFrom(xS, y)) {
    xS++;
  }
  const resultS = dfs(grid, [xS, y], destination, visited);

  // WEST
  const canMoveWestFrom = (x, y) => y - 1 >= 0 && grid[x][y - 1] === 0;
  let yW = y;
  while (canMoveWestFrom(x, yW)) {
    yW--;
  }
  const resultW = dfs(grid, [x, yW], destination, visited);

  // EAST
  const canMoveEastFrom = (x, y) => y + 1 < grid[0].length && grid[x][y + 1] === 0;
  let yE = y;
  while (canMoveEastFrom(x, yE)) {
    yE++;
  }
  const resultE = dfs(grid, [x, yE], destination, visited);

  return resultN || resultE || resultS || resultW;
}

const hasPath = function(grid, start, destination) {
  // Keep track of blocks where we already started rolling
  const visited = [];
  for (let i = 0; i < grid.length; i++) {
    visited.push(new Array(grid[0].length).fill(0));
  }

  return dfs(grid, start, destination, visited);
};

export default hasPath;
