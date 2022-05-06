//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
//
//
// 示例 1：
//
//
//输入：s = "()"
//输出：true
//
//
// 示例 2：
//
//
//输入：s = "()[]{}"
//输出：true
//
//
// 示例 3：
//
//
//输入：s = "(]"
//输出：false
//
//
// 示例 4：
//
//
//输入：s = "([)]"
//输出：false
//
//
// 示例 5：
//
//
//输入：s = "{[]}"
//输出：true
//
//
//
// 提示：
//
//
// 1 <= s.length <= 10⁴
// s 仅由括号 '()[]{}' 组成
//
// Related Topics 栈 字符串 👍 3232 👎 0


function isValid(s: string): boolean {
  const re = /\(\)|\{\}|\[\]/g
  while(s) {
    if (re.test(s)) {
      s = s.replace(re, '')
    } else {
      return false
    }
  }
  return true
}

const str1 = '((}}{][][]'
const str = '({}[{}])'

console.time('self')
console.log(isValid(str1))
console.log(isValid(str))
console.timeEnd('self')
