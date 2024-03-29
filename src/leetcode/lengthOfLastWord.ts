//给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
//
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
//
//
//
// 示例 1：
//
//
//输入：s = "Hello World"
//输出：5
//解释：最后一个单词是“World”，长度为5。
//
//
// 示例 2：
//
//
//输入：s = "   fly me   to   the moon  "
//输出：4
//解释：最后一个单词是“moon”，长度为4。
//
//
// 示例 3：
//
//
//输入：s = "luffy is still joyboy"
//输出：6
//解释：最后一个单词是长度为6的“joyboy”。
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 10⁴
// s 仅有英文字母和空格 ' ' 组成
// s 中至少存在一个单词
//
//
// Related Topics 字符串 👍 493 👎 0


function lengthOfLastWord(s: string): number {
  let isFirst = true
  let len = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && isFirst) {
      continue
    }
    if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90 ||
      s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122
    ) {
      len ++
      isFirst = false
    }
    if (s[i] === ' ') {
      break
    }
  }

  return len
}

console.log(lengthOfLastWord('Hello World'), 5)
console.log(lengthOfLastWord('   fly me   to   the moon  '), 4)
console.log(lengthOfLastWord('luffy is still joyboy'), 6)
