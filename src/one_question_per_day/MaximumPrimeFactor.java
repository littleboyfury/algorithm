package one_question_per_day;

/**
 * @author littleboy
 * @description 13195的所有质因数为5、7、13和29。
 * 600851475143最大的质因数是多少？
 * @date 2021/3/17 下午3:05
 */
public class MaximumPrimeFactor {

    public static void main(String[] args) {
        System.out.println(primeFactor(600851475143L));
    }

    public static long primeFactor(long number) {
        // 1则退出
        if (number == 1) {
            return 1;
        }
        // 从2开始，减小这个数
        for (int i = 2; i < number; i++) {
            // 当从2到number这个数之间都没有了因数，说明这个数是个质数
            if (number % i == 0) {
                // 递归查找，这里必须return，不然就会继续执行循环
                return primeFactor(number / i);
            }
        }
        // 返回这个质数
        return number;
    }
}
