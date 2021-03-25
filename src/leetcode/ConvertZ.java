package leetcode;

/**
 * @author littleboy
 * @date 2021/3/25 10:43
 */

//将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
//
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
//
//
//P   A   H   N
//A P L S I I G
//Y   I   R
//
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
//
// 请你实现这个将字符串进行指定行数变换的函数：
//
//
//string convert(string s, int numRows);
//
//
//
// 示例 1：
//
//
//输入：s = "PAYPALISHIRING", numRows = 3
//输出："PAHNAPLSIIGYIR"
//
//示例 2：
//
//
//输入：s = "PAYPALISHIRING", numRows = 4
//输出："PINALSIGYAHRPI"
//解释：
//P     I    N
//A   L S  I G
//Y A   H R
//P     I
//
//
// 示例 3：
//
//
//输入：s = "A", numRows = 1
//输出："A"
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000
//
// Related Topics 字符串
// 👍 1066 👎 0

public class ConvertZ {
    public static void main(String[] args) {
        String s = "PAYPALISHIRALKGJALKGDALAAJSHDFAJLSKDHFASUIDFHJALSDJFHKJFLAKSJFAING";
        int numRows = 4;

        long startTime = System.currentTimeMillis();
        // 1ms
        System.out.println(convert(s, numRows));
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");

        startTime = System.currentTimeMillis();
        // 0ms
        System.out.println(convert1(s, numRows));
        endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
    }

    /**
     * info
     * 解答成功:
     * 执行耗时:50 ms,击败了9.30% 的Java用户
     * 内存消耗:40.7 MB,击败了7.07% 的Java用户
     *
     * @param s       字符穿
     * @param numRows 行数
     * @return z字变换
     */
    public static String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }
        char[][] dp = new char[numRows][s.length()];
        boolean isVertical = true;
        int charI = 0, charJ = 0;
        for (int i = 0; i < s.length(); ) {
            if (isVertical) {
                for (int j = 0; j < numRows && i < s.length(); j++) {
                    dp[charI][charJ] = s.charAt(i++);
                    charI++;
                }
                charI = charI == 1 ? 0 : charI - 2;
                charJ++;
                isVertical = false;
            } else {
                while (charI > 0 && i < s.length()) {
                    dp[charI][charJ] = s.charAt(i++);
                    charJ++;
                    charI--;
                }
                isVertical = true;
            }
        }
        StringBuilder stringBuilder = new StringBuilder();
        for (char[] chars : dp) {
            for (char aChar : chars) {
                if (aChar != 0) {
                    stringBuilder.append(aChar);
                }
            }
        }
        return stringBuilder.toString();
    }

    /**
     * info
     * 解答成功:
     * 执行耗时:3 ms,击败了98.01% 的Java用户
     * 内存消耗:38.5 MB,击败了90.68% 的Java用户
     * @param s       字符穿
     * @param numRows 行数
     * @return z字变换
     */
    public static String convert1(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }
        // 一个周期个数
        int T = 2 * numRows - 2;
        // 有多少个满周期，再加剩下的部分周期
        int Ts = s.length() / T + 1;
        StringBuilder stringBuilder = new StringBuilder();
        // 遍历每一行数据
        // A
        // B   F
        // C E
        // D
        // 每一Z的上述一部分的个数为，可以看成一个周期2 * numRows - 2
        for (int i = 0; i < numRows; i++) {
            // 添加每个周期的字母
            for (int j = 0; j < Ts; j++) {
                // 添加开头，结尾和中间部分
                if (i == 0 && j * T < s.length()) {
                    stringBuilder.append(s.charAt(j * T));
                } else if (i == numRows - 1 &&
                        j * T + numRows - 1 < s.length()) {
                    stringBuilder.append(s.charAt(j * T + numRows - 1));
                } else {
                    if (j * T + i < s.length()) {
                        stringBuilder.append(s.charAt(j * T + i));
                    }
                    if ((j + 1) * T - i < s.length()) {
                        stringBuilder.append(s.charAt((j + 1) * T - i));
                    }
                }

            }
        }
        return stringBuilder.toString();
    }
}
