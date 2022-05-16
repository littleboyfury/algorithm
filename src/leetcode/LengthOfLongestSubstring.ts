//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
//
//
//
// 示例 1:
//
//
//输入: s = "abcabcbb"
//输出: 3
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
//
//
// 示例 2:
//
//
//输入: s = "bbbbb"
//输出: 1
//解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
//
//
// 示例 3:
//
//
//输入: s = "pwwkew"
//输出: 3
//解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//
//
//
//
// 提示：
//
//
// 0 <= s.length <= 5 * 10⁴
// s 由英文字母、数字、符号和空格组成
//
// Related Topics 哈希表 字符串 滑动窗口 👍 7581 👎 0


function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>()
  let maxSize = Number.MIN_VALUE
  let start = 0
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // 计算之前的最大值
      maxSize = Math.max(map.size, maxSize)
      // 获取重复字符的下标
      const tem = map.get(s[i])!
      // 删除 map 重复字符前的索引
      for (let j = start; j <= tem; j++) {
        map.delete(s[j])
      }
      // 设置开始位置
      start = tem + 1
    }
    map.set(s[i], i)
  }
  return Math.max(map.size, maxSize)
}

console.log(lengthOfLongestSubstring('pwwkew'))
