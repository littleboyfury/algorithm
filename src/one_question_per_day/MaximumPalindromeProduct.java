package one_question_per_day;

/**
 * @author littleboy
 * @description 题目
 * 回文数就是从前往后和从后往前读都一样的数。
 * 由两个2位数相乘得到的最大回文乘积是 9009 = 91 × 99。
 * 找出由两个3位数相乘得到的最大回文乘积。
 * @date 2021/3/17 16:43
 */
public class MaximumPalindromeProduct {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        // 224ms
        System.out.println(maximumPalindromeProduct());
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
        startTime = System.currentTimeMillis();
        // 8ms
        System.out.println(bigPalindrome());
        endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
    }

    public static int maximumPalindromeProduct() {
        // 暴力求解
        int max = 0;
        for (int i = 999; i > 0; i--) {
            for (int j = 999; j > 0; j--) {
                // 将乘积转为字符串，比较前三位和后三位反转是否相等，字符串比较慢
                String pstr = String.valueOf(i * j);
                if (pstr.length() == 6) {
                    String pstr1 = pstr.substring(0, 3);
                    String pstr2 = new StringBuilder(pstr.substring(3, 6)).
                            reverse().toString();
                    if (pstr1.equals(pstr2) && i * j > max) {
                        max = i * j;
                    }
                }
            }
        }
        return max;
    }

    /**
     * 公众号求解
     *
     * @return 最大回文数
     */
    public static int bigPalindrome() {
        int max = 0;
        // 暴力求解
        for (int i = 999; i > 0; i--) {
            for (int j = 999; j > 0; j--) {
                int product = i * j;
                // 判断是否回文
                if (max < product && palindrome(product)) {
                    max = product;
                }
            }
        }
        return max;
    }

    public static boolean palindrome(int num) {
        int bigcount = 0;
        int[] bit = new int[10];
        // 转化num为每个数字，并且记录长度
        while (num != 0) {
            bit[bigcount++] = num % 10;
            num /= 10;
        }
        // bigcount 右移一位相当于除2
        for (int i = 0; i < bigcount >> 1; i++) {
            if (bit[i] != bit[bigcount - i - 1]) {
                return false;
            }
        }
        return true;
    }
}
