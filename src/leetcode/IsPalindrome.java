package leetcode;

import java.util.Arrays;

/**
 * @author littleboy
 * @date 2021/3/25 14:46
 */

//给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
//
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
//
//
//
// 示例 1：
//
//
//输入：x = 121
//输出：true
//
//
// 示例 2：
//
//
//输入：x = -121
//输出：false
//解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
//
//
// 示例 3：
//
//
//输入：x = 10
//输出：false
//解释：从右向左读, 为 01 。因此它不是一个回文数。
//
//
// 示例 4：
//
//
//输入：x = -101
//输出：false
//
//
//
//
// 提示：
//
//
// -231 <= x <= 231 - 1
//
//
//
//
// 进阶：你能不将整数转为字符串来解决这个问题吗？
// Related Topics 数学
// 👍 1437 👎 0


public class IsPalindrome {
    public static void main(String[] args) {
        int x = 11;
        long startTime = System.currentTimeMillis();
        // 4ms
        System.out.println(isPalindrome(x));
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");

        startTime = System.currentTimeMillis();
        // 4ms
        System.out.println(isPalindrome1(x));
        endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");

    }

    /**
     * 转换数字为数组，用数组来判断，没有使用字符串
     * info
     * 解答成功:
     * 执行耗时:10 ms,击败了73.84% 的Java用户
     * 内存消耗:38.5 MB,击败了5.86% 的Java用户
     *
     * @param x 数字
     * @return 是否为回文数字
     */
    public static boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        int[] dp = new int[32];
        int len = 0;
        while (x != 0) {
            dp[len++] = x % 10;
            x = x / 10;
        }
        for (int i = 0, j = len - 1; i <= j; i++, j--) {
            if (dp[i] != dp[j]) {
                return false;
            }
        }
        return true;
    }

    /**
     * 字符串构建太耗时间
     * info
     * 解答成功:
     * 执行耗时:12 ms,击败了31.73% 的Java用户
     * 内存消耗:38.5 MB,击败了6.08% 的Java用户
     * @param x 数字
     * @return 是否为回文数字
     */
    public static boolean isPalindrome1(int x) {
        if (x < 0) {
            return false;
        }
        String string = String.valueOf(x);
        StringBuilder stringBuilder = new StringBuilder(
                string.substring(string.length() / 2)).reverse();
        return string.substring(0, (string.length() + 1) / 2)
                .equals(stringBuilder.toString());
    }

}
