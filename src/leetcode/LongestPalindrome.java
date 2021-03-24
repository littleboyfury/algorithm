package leetcode;

/**
 * @author littleboy
 * @date 2021/3/23 15:30
 */

//给你一个字符串 s，找到 s 中最长的回文子串。
//
//
//
// 示例 1：
//
//
//输入：s = "babad"
//输出："bab"
//解释："aba" 同样是符合题意的答案。
//
//
// 示例 2：
//
//
//输入：s = "cbbd"
//输出："bb"
//
//
// 示例 3：
//
//
//输入：s = "a"
//输出："a"
//
//
// 示例 4：
//
//
//输入：s = "ac"
//输出："a"
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成
//
// Related Topics 字符串 动态规划
// 👍 3399 👎 0


public class LongestPalindrome {
    public static void main(String[] args) {
        // String s = "diznyfwmwzzbyurvhauyeoetfnmfsijmkwrwtcrvvswekgocbybcudxkqkzcilgfkgfocgfmtrifycmprgjtcyyvxsozyenumeuaknqqfypmjmybczikxqlaxinuyvifzcnnaqyaeqhxzpwdbhhslddtsmvyklshzshqwssowwweonakwxyrfuwgqdinvmguhesbxxshqmshxjfexnajrzilzzlwvlgrdfbjxmajsplyphiiyyjstxtrlbkaakblrtxtsjyyiihpylpsjamxjbfdrglvwlzzlizrjanxefjxhsmqhsxxbsehugmvnidqgwufryxwkanoewwwosswqhszhslkyvmstddlshhbdwpzxhqeayqannczfivyunixalqxkizcbymjmpyfqqnkauemuneyzosxvyyctjgrpmcyfirtmfgcofgkfgliczkqkxducbybcogkewsvvrctwrwkmjisfmnfteoeyuahvruybzzwmwfynzid";
        String s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        long startTime = System.currentTimeMillis();
        // 371ms
        System.out.println(longestPalindrome(s));
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");

        startTime = System.currentTimeMillis();
        // 145ms
        System.out.println(longestPalindrome1(s));
        endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");

        startTime = System.currentTimeMillis();
        // 21ms
        System.out.println(longestPalindrome2(s));
        endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
    }

    /**
     * 答案正确，但是超时，字符串操作太耗时了
     *
     * @param s 字符串
     * @return 回文字符串
     */
    public static String longestPalindrome(String s) {
        int maxI = 0, maxJ = 0, maxLen = -1;
        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j < s.length(); j++) {
                String s1 = s.substring(i, i + (j - i) / 2 + 1);
                String s2 = new StringBuffer(
                        s.substring(j - (j - i) / 2, j + 1))
                        .reverse().toString();
                if (s1.equals(s2) && j - i + 1 > maxLen) {
                    maxI = i;
                    maxJ = j;
                    maxLen = j - i + 1;
                }
            }
        }
        return s.substring(maxI, maxJ + 1);
    }

    /**
     * 答案正确，但是超时，三层循环过多，但是时间比上面少一半左右
     *
     * @param s 字符串
     * @return 回文字符串
     */
    public static String longestPalindrome1(String s) {
        int maxI = 0, maxJ = 0, maxLen = -1;
        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j < s.length(); j++) {
                boolean huiwen = true;
                for (int m = i, n = j; m <= n; m++, n--) {
                    if (s.charAt(n) != s.charAt(m)) {
                        huiwen = false;
                        break;
                    }
                }
                if (huiwen && j - i + 1 > maxLen) {
                    maxI = i;
                    maxJ = j;
                    maxLen = j - i + 1;
                }
            }
        }
        return s.substring(maxI, maxJ + 1);
    }

    /**
     * info
     * 解答成功:
     * 执行耗时:42 ms,击败了69.78% 的Java用户
     * 内存消耗:38.6 MB,击败了74.46% 的Java用户
     *
     * 暴力求解从一个字符出发，判断左右两个字符是否相等，一直判断，记录最大值
     * @param s 字符串
     * @return 回文字符串
     */
    public static String longestPalindrome2(String s) {
        int maxI = 0, maxJ = 0, maxLen = -1;
        int maxI2 = 0, maxJ2 = 0, maxLen2 = -1;
        int maxI3 = 0, maxJ3 = 0, maxLen3 = -1;
        for (int i = 0; i < s.length(); i++) {
            // 从该字符出发，判断左右两个是否相等
            for (int j = 0; i - j >= 0 && i + j < s.length(); j++) {
                if (s.charAt(i - j) != s.charAt(j + i)) {
                    break;
                }
                maxI = i - j;
                maxJ = i + j;
                maxLen = 2 * j + 1;
            }
            // 从该字符和右边一个开始比较
            for (int j = 0; i - j >= 0 && i + 1 + j < s.length(); j++) {
                if (s.charAt(i - j) != s.charAt(j + i + 1)) {
                    break;
                }
                maxI2 = i - j;
                maxJ2 = i + j + 1;
                maxLen2 = 2 * j + 2;
            }
            // 判断第二个和第一个长度，判断第二个和最大的长度
            if (maxLen2 > maxLen && maxLen2 > maxLen3) {
                maxI3 = maxI2;
                maxJ3 = maxJ2;
                maxLen3 = maxLen2;
            } else if (maxLen > maxLen3) {
                maxI3 = maxI;
                maxJ3 = maxJ;
                maxLen3 = maxLen;
            }

        }
        return s.substring(maxI3, maxJ3 + 1);
    }
}
