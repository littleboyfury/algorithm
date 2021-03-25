package leetcode;

/**
 * @author littleboy
 * @date 2021/3/25 14:01
 */

//给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
//
// 如果反转后整数超过 32 位的有符号整数的范围 [−231, 231 − 1] ，就返回 0。
//假设环境不允许存储 64 位整数（有符号或无符号）。
//
//
//
// 示例 1：
//
//
//输入：x = 123
//输出：321
//
//
// 示例 2：
//
//
//输入：x = -123
//输出：-321
//
//
// 示例 3：
//
//
//输入：x = 120
//输出：21
//
//
// 示例 4：
//
//
//输入：x = 0
//输出：0
//
//
//
//
// 提示：
//
//
// -231 <= x <= 231 - 1
//
// Related Topics 数学
// 👍 2634 👎 0


public class ReverseInteger {
    public static void main(String[] args) {
        int x = 1534236469;
        System.out.println(reverse(x));
    }

    /**
     * 解答成功:
     * 执行耗时:3 ms,击败了18.88% 的Java用户
     * 内存消耗:35.9 MB,击败了10.25% 的Java用户
     * @param x 数字
     * @return 反转的数字
     */
    public static int reverse(int x) {
        try{
            boolean negative = x < 0;
            x = x < 0 ? -x : x;
            StringBuilder stringBuilder = new StringBuilder(String.valueOf(x));
            x = Integer.parseInt(stringBuilder.reverse().toString());
            x = negative ? -x : x;
            return x;
        }catch (NumberFormatException e) {
            return 0;
        }
    }
}
