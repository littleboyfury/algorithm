//n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
//
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
//
//
//
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
//
//
//
// 示例 1：
//
//
//输入：n = 4
//输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
//解释：如上图所示，4 皇后问题存在两个不同的解法。
//
//
// 示例 2：
//
//
//输入：n = 1
//输出：[["Q"]]
//
//
//
//
// 提示：
//
//
// 1 <= n <= 9
// 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
//
//
//
// Related Topics 数组 回溯
// 👍 972 👎 0


function solveNQueens(n: number): string[][] {
  const result: string[][] = []
  const resultOne: string[][] = new Array(n)

  // 构造初始数组
  for (let i = 0; i < n; i++) {
    resultOne[i] = new Array(n).fill('.')
  }
  execNQueens(0, n, resultOne, result)
  return result
}

/**
 * 求解 N 皇后
 * @param x 第 x 排
 * @param n 总数
 * @param resultOne 其中一个结果
 * @param result 全部结果
 */
function execNQueens(x, n: number, resultOne: string[][], result: string[][]) {
  // 退出条件
  if (x === n) {
    // 将结果放入 result 中
    const tem = new Array(n)
    for (let i = 0; i < n; i++) {
      tem[i] = resultOne[i].join('')
    }
    result.push(tem)
    return
  }

  for (let i = 0; i < n; i++) {

    // 判断 (x, i) 是否可以存放
    if (!isEffective(x, i, resultOne)) {
      continue
    }

    // 放入皇后
    resultOne[x][i] = 'Q'

    // 查找下一排
    execNQueens(x + 1, n, resultOne, result)

    // 还原结果
    resultOne[x][i] = '.'
  }
}

/**
 * 判断该位置是否有效
 * @param x 横坐标
 * @param y 纵坐标
 * @param result 棋盘
 */
function isEffective(x: number, y: number, result: string[][]): boolean {
  // 竖
  for (let i = x - 1; i >= 0; i--) {
    if (result[i][y] === 'Q') {
      return false
    }
  }

  // 反斜
  for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
    if (result[i][j] === 'Q') {
      return false
    }
  }

  // 正斜
  for (let i = x - 1, j = y + 1; i >= 0 && j < result.length; i--, j++) {
    if (result[i][j] === 'Q') {
      return false
    }
  }

  return true
}

console.time('solve n queens')
const res = solveNQueens(4)
console.log(res)
console.timeEnd('solve n queens')
