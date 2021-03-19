package leetcode;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * @author littleboy
 * @date 2021/3/19 14:04
 */


//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
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
// 示例 4:
//
//
//输入: s = ""
//输出: 0
//
//
//
//
// 提示：
//
//
// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成
//
// Related Topics 哈希表 双指针 字符串 Sliding Window
// 👍 5136 👎 0


public class LengthOfLongestSubstring {
    public static void main(String[] args) {
        String s = "pwwkew";
        System.out.println(lengthOfLongestSubstring4(s));
    }

    /**
     * 利用hashmap
     *
     * @param s 字符串
     * @return 不同字符的子串长度
     */
    public static int lengthOfLongestSubstring(String s) {
        // 保存加入的字符
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0;
        for (int i = 0, j = 0; j < s.length(); j++) {
            char c = s.charAt(j);
            // 比较这个字符是否存在
            if (map.containsKey(c)) {
                // 存在则计算最大长度
                maxLen = Math.max(j - i, maxLen);
                // 将i滑动到之前这个字符的下一个
                i = map.get(c) + 1;
                // j保持不多或者等于i
                j = Math.max(i, j);
                map.clear();
                // 将i和j的字符重新加入
                for (int tem = i; tem <= j; tem++) {
                    map.put(s.charAt(tem), tem);
                }
            } else {
                // 加入字符
                map.put(c, j);
                // 计算最大长度
                maxLen = Math.max(j - i + 1, maxLen);
            }
        }
        return maxLen;
    }

    /**
     * 直接利用字符串滑动
     *
     * @param s 字符串
     * @return 子串长度
     */
    public static int lengthOfLongestSubstring1(String s) {
        int maxLen = 0;
        for (int i = 0, j = 0; j < s.length() && i < s.length(); ) {
            char c = s.charAt(j);
            // 比较这个字符是否存在 i 到 j - 1的字符
            int index = s.substring(i, j).indexOf(c);
            if (index != -1) {
                // 存在则计算最大长度
                // maxLen = Math.max(j - i, maxLen);
                maxLen = Math.max(j - i, maxLen);
                // 将i滑动到之前这个字符的下一个, index为i到j-1的字符串中的位置
                //   i     j       index = 0
                // a b c a b c b b
                // i的下一个位置i = i + index + 1
                i = index + 1 + i;
                // j保持不动或者等于i
                j = Math.max(i, j);
            } else {
                // 计算最大长度
                // maxLen = Math.max(j - i + 1, maxLen);
                maxLen = Math.max(j - i + 1, maxLen);
                j++;
            }
        }
        return maxLen;
    }

    /**
     * 参考大佬的写法，改进之前的滑动窗口
     * @param s 字符串
     * @return 长度
     */
    public static int lengthOfLongestSubstring4(String s) {
        int right = 0;
        int left = 0;
        int n = s.length();
        int maxLen = 0;
        while (right < n) {
            // 当前字符，right指向下一个
            char c = s.charAt(right++);
            // 判断right - 1的字符和i到right - 2的字符是否有重复
            int index = s.substring(left, right - 1).indexOf(c);
            if (index != -1) {
                //用重复将left移动到left到right-1直接重复字符的下一个
                left = index + 1 + left;
            }
            // 求解最大长度
            maxLen = Math.max(maxLen, right - left);
        }
        return maxLen;
    }

    /**
     * 大佬解法
     * @param s 字符串
     * @return 子串长度
     */
    public static int lengthOfLongestSubstring2(String s) {
        Set<Character> set = new HashSet<>();
        int left = 0;
        int right = 0;
        int res = 0;
        int n = s.length();
        while (right < n) {
            char c = s.charAt(right++);
            while (set.contains(c)) {
                set.remove(s.charAt(left++));
            }
            set.add(c);
            res = Math.max(res, right - left);
        }
        return res;
    }
}
