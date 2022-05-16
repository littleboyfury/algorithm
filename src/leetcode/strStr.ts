//实现 strStr() 函数。
//
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如
//果不存在，则返回 -1 。
//
//
//
// 说明：
//
// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
//
// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
//
//
//
// 示例 1：
//
//
//输入：haystack = "hello", needle = "ll"
//输出：2
//
//
// 示例 2：
//
//
//输入：haystack = "aaaaa", needle = "bba"
//输出：-1
//
//
// 示例 3：
//
//
//输入：haystack = "", needle = ""
//输出：0
//
//
//
//
// 提示：
//
//
// 1 <= haystack.length, needle.length <= 10⁴
// haystack 和 needle 仅由小写英文字符组成
//
// Related Topics 双指针 字符串 字符串匹配 👍 1423 👎 0


function strStr(haystack: string, needle: string): number {
  if (haystack === needle) {
    return 0
  }
  if (needle.length > haystack.length) {
    return -1
  }
  // 第一个下标，needle 的下标
  let start = -1, j = 0
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      // 如果两个值匹配
      if (j === 0) {
        // 如果 j 为 0，则记录 i 的开始位置
        start = i
      }
      // 如果到了结尾，则退出
      if (j === needle.length - 1 || i === haystack.length - 1) {
        break
      }
      j++
    } else {
      // 如果两个值不匹配
      for (let k = start; j !== 0 && k <= i; k++) {
        // 从 start 开始找，找到和 needle 第一个字符相等的下标
        if (haystack[k] === needle[0]) {
          i = k
          break
        }
      }
      // j 归 0
      j = 0
    }
  }
  // 如果 i 遍历完了，但是 j 没有，则返回 -1
  return j === needle.length - 1 ? start : -1
}

console.log(strStr('mississippi', 'issip'))
console.log(strStr('mississippi', 'sippi'))
console.log(strStr('aaaaa', 'bba'))
console.log(strStr('hello', 'll'))
console.log(strStr('', ''))
