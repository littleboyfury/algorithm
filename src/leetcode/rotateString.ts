//给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。
//
// s 的 旋转操作 就是将 s 最左边的字符移动到最右边。
//
//
// 例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。
//
//
//
//
// 示例 1:
//
//
//输入: s = "abcde", goal = "cdeab"
//输出: true
//
//
// 示例 2:
//
//
//输入: s = "abcde", goal = "abced"
//输出: false
//
//
//
//
// 提示:
//
//
// 1 <= s.length, goal.length <= 100
// s 和 goal 由小写英文字母组成
//
// Related Topics 字符串 字符串匹配 👍 262 👎 0


function rotateString(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).includes(goal)
}

function rotateString1(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    // 查找开始字符
    if (s[i] === goal[0]) {

      let j = 0, m = i
      for (; j < goal.length; j++, m++) {

        // 如果 m 到了 s 结尾，则从头开始匹配
        if (m === s.length) {
          m = 0
        }

        // 如果没有匹配，则说明不是旋转字符
        if (s[m] !== goal[j]) {
          break
        }
      }

      // 如果循环正常退出，则是旋转字符
      if (j === goal.length) {
        return true
      }
    }
  }
  return false
}

const a = 'asdjfhasdlkjfhasdlkjfgasldkjfhlkasjhdflkajsdhflkajhsdgfoiawuefhlaksjdhflaksujdhflkajsdhfoiausjdhflkajshdflkajshdfkjahsdloifuawyhefolkjashdflkjahsdlkjfhgaskdjhfglaksjdhgflaksjdhflasjkdhfklasjdhajksdhfouaiwhelkjfhalsekjhfaskejhflaskdjfasd'
const b = 'fklasjdhajksdhfouaiwhelkjfhalsekjhfaskejhflaskdjfasdasdjfhasdlkjfhasdlkjfgasldkjfhlkasjhdflkajsdhflkajhsdgfoiawuefhlaksjdhflaksujdhflkajsdhfoiausjdhflkajshdflkajshdfkjahsdloifuawyhefolkjashdflkjahsdlkjfhgaskdjhfglaksjdhgflaksjdhflasjkdh'

console.time('test')
console.log(rotateString(a, b))
console.timeEnd('test')


console.time('test')
console.log(rotateString1(a, b))
console.timeEnd('test')


