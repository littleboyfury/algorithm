//实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xⁿ ）。
//
//
//
// 示例 1：
//
//
//输入：x = 2.00000, n = 10
//输出：1024.00000
//
//
// 示例 2：
//
//
//输入：x = 2.10000, n = 3
//输出：9.26100
//
//
// 示例 3：
//
//
//输入：x = 2.00000, n = -2
//输出：0.25000
//解释：2-2 = 1/22 = 1/4 = 0.25
//
//
//
//
// 提示：
//
//
// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= xⁿ <= 104
//
// Related Topics 递归 数学 👍 979 👎 0


function myPow(x: number, n: number): number {
  if (n < 0) {
    // 小于 0，则是 1 / x 的 -n 次方
    return 1 / myPow(x, -n)
  } else if (n === 0) {
    // 任何数的 0 次方都是 1
    return 1
  } else if (n === 1) {
    // 1 次方返回本身
    return x
  } else if (n === 2) {
    // 2 次方返回自己相乘
    return x * x
  } else {
    if (n % 2 === 0) {
      // 偶数次方，先求解 n / 2 次方 的值，再求解 平方
      return myPow(myPow(x, n / 2), 2)
    }

    // 奇数次方，本身 * n - 1 次方
    return x * myPow(myPow(x, (n - 1) / 2), 2)
  }
}

console.time('infinity my')
console.log(myPow(0.5, -2147483648))
console.timeEnd('infinity my')
console.time('infinity math')
console.log(Math.pow(0.5, -2147483648))
console.timeEnd('infinity math')
console.log(myPow(2.10000, 3), Math.pow(2.1, 3))
console.log(myPow(2.00000, -2), Math.pow(2, -2))
export default ''
