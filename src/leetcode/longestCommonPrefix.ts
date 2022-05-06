//编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
//
//
// 示例 1：
//
//
//输入：strs = ["flower","flow","flight"]
//输出："fl"
//
//
// 示例 2：
//
//
//输入：strs = ["dog","racecar","car"]
//输出：""
//解释：输入不存在公共前缀。
//
//
//
// 提示：
//
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成
//
// Related Topics 字符串 👍 2224 👎 0


function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0]
  for (const str of strs) {
    // 求两个之间的最长前缀
    prefix = twoCommonPrefix(prefix, str)
  }
  return prefix
}

function twoCommonPrefix(str1, str2): string {
  for (let i = 0; ; i++) {
    if (i >= Math.min(str1.length, str2.length)) {
      return str1.length > str2.length ? str2 : str1
    }
    if (str1[i] !== str2[i]) {
      return str1.substring(0, i)
    }
  }
}

const strs = [
  "flower",
  "flow",
  "flight",
]

console.time('self')
console.log(longestCommonPrefix(strs))
console.timeEnd('self')
// console.log(twoCommonPrefix('dog11', 'dog'), 'aaa')
