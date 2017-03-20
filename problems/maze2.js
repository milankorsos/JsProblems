/*

There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by
rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball
stops, it could choose the next direction.

Given the ball's start position, the destination and the maze, find the shortest distance for
the ball to stop at the destination. The distance is defined by the number of empty spaces
traveled by the ball from the start position (excluded) to the destination (included). If the
ball cannot stop at the destination, return -1.

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

https://leetcode.com/problems/the-maze-ii/

*/

// Return cell coords when rolling up
const rollUp = function(maze, x, y) {
  const canMoveUp = (x, y) => x - 1 >= 0 && maze[x - 1][y] === 0; // !wall & !out of bounds
  let xNew = x;
  while (canMoveUp(xNew, y)) {
    xNew--;
  }
  return {
    x: xNew,
    y,
    distance: x - xNew
  };
}

// Return cell coords when rolling down
const rollDown = function(maze, x, y) {
  const canMoveDown = (x, y) => x + 1 < maze.length && maze[x + 1][y] === 0; // !wall & !oobounds
  let xNew = x;
  while (canMoveDown(xNew, y)) {
    xNew++;
  }
  return {
    x: xNew,
    y,
    distance: xNew - x
  };
}

// Return cell coords when rolling left
const rollLeft = function(maze, x, y) {
  const canMoveLeft = (x, y) => y - 1 >= 0 && maze[x][y - 1] === 0; // !wall & !oobounds
  let yNew = y;
  while (canMoveLeft(x, yNew)) {
    yNew--;
  }
  return {
    x,
    y: yNew,
    distance: y - yNew
  };
}

// Return cell coords when rolling right
const rollRight = function(maze, x, y) {
  const canMoveRight = (x, y) => y + 1 < maze[0].length && maze[x][y + 1] === 0; //!wall & !oobounds
  let yNew = y;
  while (canMoveRight(x, yNew)) {
    yNew++;
  }
  return {
    x,
    y: yNew,
    distance: yNew - y
  };
}

// Breadth first search (finds shortest path)
const bfs = function(maze, start, destination, visited) {
  const queue = []; // use queue.unshift & queue.pop

  queue.unshift([start[0], start[1], 0]);

  while (queue.length) {
    const current = queue.pop();
    const x = current[0];
    const y = current[1];
    const distance = current[0];

    // If visiting first one update distance to 0
    if (visited[x][y] === -1) {
      visited[x][y] = 0;
    }

    // Check if we found destination
    if ((x === destination[0]) && (y === destination[1])) {
      return visited[x][y];
    }

    // Add children to queue if they are not visited yet & update distance

    // UP
    const up = rollUp(maze, x, y);
    if (visited[up.x][up.y] === -1) {
      if (up.distance > 0) {
        queue.unshift([up.x, up.y, up.distance]);
        visited[up.x][up.y] = visited[x][y] + up.distance;
      }
    }

    // DOWN
    const down = rollDown(maze, x, y);
    if (visited[down.x][down.y] === -1) {
      if (down.distance > 0) {
        queue.unshift([down.x, down.y, down.distance]);
        visited[down.x][down.y] = visited[x][y] + down.distance;
      }
    }

    // LEFT
    const left = rollLeft(maze, x, y);
    if (visited[left.x][left.y] === -1) {
      if (left.distance > 0) {
        queue.unshift([left.x, left.y, left.distance]);
        visited[left.x][left.y] = visited[x][y] + left.distance;
      }
    }

    // RIGHT
    const right = rollRight(maze, x, y);
     if (visited[right.x][right.y] === -1) {
      if (right.distance > 0) {
        queue.unshift([right.x, right.y, right.distance]);
        visited[right.x][right.y] = visited[x][y] + right.distance;
      }
    }
  }

  return -1;
}

// Return distance of shortest path between start and destionation with a rolling ball
const shortestDistance = function(maze, start, destination) {

  // Keep track of cells where we started a roll from. This should be the shortest distance to start
  const visited = [];
  for (let i = 0; i < maze.length; i++) {
    visited.push(new Array(maze[0].length).fill(-1));
  }

  return bfs(maze, start, destination, visited);
};

export default shortestDistance;
