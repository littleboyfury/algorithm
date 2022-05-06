//给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
//
//
// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
//
//
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
//
//
// 示例 1：
//
//
//输入：s = "aa" p = "a"
//输出：false
//解释："a" 无法匹配 "aa" 整个字符串。
//
//
// 示例 2:
//
//
//输入：s = "aa" p = "a*"
//输出：true
//解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
//
//
// 示例 3：
//
//
//输入：s = "ab" p = ".*"
//输出：true
//解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
//
//
// 示例 4：
//
//
//输入：s = "aab" p = "c*a*b"
//输出：true
//解释：因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
//
//
// 示例 5：
//
//
//输入：s = "mississippi" p = "mis*is*p*."
//输出：false
//
//
//
// 提示：
//
//
// 0 <= s.length <= 20
// 0 <= p.length <= 30
// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
// 保证每次出现字符 * 时，前面都匹配到有效的字符
//
// Related Topics 递归 字符串 动态规划
// 👍 2275 👎 0
// 'mississippi'
// 'mis*is.*'
function isMatch(s: string, p: string): boolean {
  console.log(s)
  console.log(p)
  const status = loadStatus(p)
  let i = s.length - 1, j = p.length - 1
  console.log(status)

  for (; i >= 0 && j >= 0;) {
    const p1 = status[j]
    if (!p1) {
      j--
      continue
    }
    if (p1.length === 2) {
      if (p1[0] === '.') {

      } else if (p1[0] === s[i]) {
        i--
      } else {
        i--
        j--
      }

    } else if (p1[0] === '.' || p1[0] === s[0]) {
      i--
      j--
    } else {
      return false
    }
    // if (p1.length === 2 || p1.length === 3) {
    //   if (p1[0] === '.' || p1[2]) {
    //     if (p1[2]) {
    //       i = s.indexOf(p1[2], i)
    //       if (i === -1) {
    //         return false
    //       }
    //     } else {
    //       return true
    //     }
    //   }
    //   if (p1[0] === s[i]) {
    //     i++
    //   } else {
    //     j += 2
    //   }
    // } else if (p1[0] === '.') {
    //   i++
    //   j++
    // } else if (p1[0] === s[i]) {
    //   i++
    //   j++
    // } else {
    //   return false
    // }
  }
  return true
  // const statusKeys = Object.keys(status).map(v => parseInt(v)).sort()
  // return i === s.length && (j === p.length || j === statusKeys[statusKeys.length - 1] && status[j].length > 1)
}

function loadStatus(p: string) {
  const status = {}
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      status[i - 1].push('*')
      // if (p[i + 1]) {
      //   status[i - 1].push(p[i + 1])
      // }
    } else {
      status[i] = [p[i]]
    }
  }
  return status
}


// console.log(isMatch('aaa', 'a*a'), true)
console.log(isMatch('abc', '.*c'), true)
// console.log(isMatch('aa', 'a*'), true)
// console.log(isMatch('aaa', 'aaaa'), false)
// console.log(isMatch('aaa', 'aa'), false)
// console.log(isMatch('ab', '.*c'), false)

/**
 * .*
 * .*a
 * a*a
 * a*
 * a*.
 *
 */
