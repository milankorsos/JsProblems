/*
  Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is
  surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
  You may assume all four edges of the grid are all surrounded by water.

  Example 1:

  11110
  11010
  11000
  00000
  Answer: 1

  Example 2:

  11000
  11000
  00100
  00011
  Answer: 3

  https://leetcode.com/problems/number-of-islands/
*/

const dfs = function(rowIndex, cellIndex, map, visited) {
  // If current one is visited then we are done
  if (visited[rowIndex][cellIndex] === 1) {
    return visited;
  }

  // Mark current as visited
  visited[rowIndex][cellIndex] = 1;

  // If current one is land then explore sides, otherwise we are done
  if (map[rowIndex][cellIndex] === '1') {
    // Explore South
    if (rowIndex + 1 < map.length) {
      dfs(rowIndex + 1, cellIndex, map, visited);
    }
    // Explore North
    if (rowIndex - 1 >= 0) {
      dfs(rowIndex - 1, cellIndex, map, visited);
    }
    // Explore East
    if (cellIndex + 1 < map[0].length) {
      dfs(rowIndex, cellIndex + 1, map, visited);
    }
    // Explore South
    if (cellIndex - 1 >= 0) {
      dfs(rowIndex, cellIndex - 1, map, visited);
    }
  }

  return visited;
}

const numIslands = function(map) {
  // Create visited array, prepopulated with 0 s
  const visited = [];
  for (let i = 0; i < map.length; i++) {
    visited.push(new Array(map[0].length).fill(0));
  }

  let count = 0;

  // Iterate through the map. If a block is visited mark it as such.
  map.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      // if not visited yet then visit the block
      if (visited[rowIndex][cellIndex] === 0) {

        if (cell === '0') {
          // water: nothing to do, just mark it as visited
          visited[rowIndex][cellIndex] = 1;

        } else {
          // land: explore land, visit all cells for island and mark them as visited
          dfs(rowIndex, cellIndex, map, visited);
          count++;
        }
      }
    });
  });
  return count;
};

export default numIslands;
