/**
 Task
 You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions
 (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

 Empty positions are marked ..
 Walls are marked W.
 Start and exit positions are empty in all test cases.

 const chai = require("chai");
 const assert = chai.assert;
 chai.config.truncateThreshold=0;



 function testMaze(expected, maze){
  let actual = pathFinder(maze);
  assert.strictEqual(actual, expected, maze);
}

 describe("Peth  Finder Tests", function(){

it("Basic tests", function(){

testMaze(true,
`.W.
.W.
...`);

testMaze(false,
`.W.
.W.
W..`);

testMaze(true,
`......
......
......
......
......
......`);

testMaze(false,
`......
......
......
......
.....W
....W.`);

});

});
 */
/**
 * 方格寻路 W为障碍，需要从[0,0]的位置到[N-1,N-1]的位置，能到达为true，不能则为false
 * @param maze
 */
function pathFinder(maze: string): boolean {
  return searchRoute(maze.split('\n').map(v => v.split('')), 0, 0)
}

/**
 * 写得比较复杂的回溯逻辑 1为走过的路，W为墙
 * @param maze
 * @param i
 * @param j
 */
function searchRoute(maze: string[][], i: number, j: number): boolean {
  // 满足条件
  if (i === (maze.length - 1) && j === (maze[0].length - 1)) {
    return true
  }
  let isSuccess = false

  if (!isSuccess && j + 1 < maze[0].length && maze[i][j + 1] === '.') {
    // right
    maze[i][j] = '1'
    isSuccess = searchRoute(maze, i, j + 1)
    maze[i][j] = '.'
  }
  if (!isSuccess && i + 1 < maze.length && maze[i + 1][j] === '.') {
    // down
    maze[i][j] = '1'
    isSuccess = searchRoute(maze, i + 1, j)
    maze[i][j] = '.'
  }
  if (!isSuccess && i - 1 >= 0 && maze[i - 1][j] === '.') {
    // up
    maze[i][j] = '1'
    isSuccess = searchRoute(maze, i - 1, j)
    maze[i][j] = '.'
  }
  if (!isSuccess && j - 1 >= 0 && maze[i][j - 1] === '.') {
    // left
    maze[i][j] = '1'
    isSuccess = searchRoute(maze, i, j - 1)
    maze[i][j] = '.'
  }

  if (isSuccess) {
    return true
  }

  // 路已绝
  maze[i][j] = 'W'

  return false
}

console.log(pathFinder(`......W.W
.WWWW....
.W.W.W.W.
..W.....W
.W....W..
..W.W.W..
..W......
........W
.WW......`), true)
console.log(pathFinder(`......
......
......
......
.....W
....W.`), false)
console.log(pathFinder(`.W.
...
.W.`), true)

