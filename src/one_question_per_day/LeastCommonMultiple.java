package one_question_per_day;

/**
 * @author littleboy
 * @description 题目
 * 2520是最小的能够被1到10整除的数。
 * 最小的能够被1到20整除的正数是多少？
 * @date 2021/3/18 10:41
 */
public class LeastCommonMultiple {
    public static void main(String[] args) {
        // num = 20
        // 232792560
        // 程序运行时间：1ms
        // 232792560
        // 程序运行时间：37ms
        // num=30
        // 2329089562800
        // 程序运行时间：0ms
        // 2329089562800
        // 程序运行时间：134461ms
        long num = 20;
        long startTime = System.currentTimeMillis();
        System.out.println(smallestPositiveInteger(num));
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
        startTime = System.currentTimeMillis();
        System.out.println(smallestMultiple(num));
        endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
    }

    /**
     * 耗时短
     * @param num 20
     * @return 最小公倍数
     */
    public static long smallestPositiveInteger(long num) {
        // 最小公倍数
        long leastCommonMultiple = num;
        // 这个运行20次，最多400次
        for (long i = leastCommonMultiple - 1; i > 1; i--) {
            // 最大公约数
            //这里面每一个小于20次
            long commonDivisor = gcd1(leastCommonMultiple, i);
            // 最小公倍数 = 两个数乘积 / 最大公约数
            leastCommonMultiple = leastCommonMultiple * i / commonDivisor;
        }
        return leastCommonMultiple;
    }

    /**
     * 欧几里得求最小公约数，非递归
     *
     * @param m 大的数
     * @param n 小的数
     * @return 公约数
     */
    public static long gcd1(long m, long n) {
        long r = 1;
        while (r != 0) {
            r = m % n;
            m = n;
            n = r;
        }
        return m;
    }

    /**
     * 欧几里得求最小公约数，递归
     *
     * @param m 大的数
     * @param n 小的数
     * @return 公约数
     */
    public static long gcd2(long m, long n) {
        if (m % n == 0) {
            return n;
        } else {
            return gcd2(n, m % n);
        }
    }

    /**
     * 公众号解答
     *
     * 暴力求解，验证每个数是否都能被1-20的数整除
     * @param num 20
     * @return 最小公倍数
     */
    public static long smallestMultiple(long num) {
        long product = num * (num - 1);
        long m = 0;
        //主要耗时，程序需要运行232792560次
        for (long i = 1; i < Long.MAX_VALUE; i++) {
            m = product * i;
            for (long j = 2; j <= num; j++) {
                if (m % j != 0) {
                    break;
                }
                if (j == num) {
                    return m;
                }
            }
        }
        return m;
    }
}
