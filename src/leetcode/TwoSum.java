package leetcode;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * @author littleboy
 * @date 2021/3/19 09:45
 */

//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//
// 你可以按任意顺序返回答案。
//
//
//
// 示例 1：
//
//
//输入：nums = [2,7,11,15], target = 9
//输出：[0,1]
//解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
//
//
// 示例 2：
//
//
//输入：nums = [3,2,4], target = 6
//输出：[1,2]
//
//
// 示例 3：
//
//
//输入：nums = [3,3], target = 6
//输出：[0,1]
//
//
//
//
// 提示：
//
//
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// 只会存在一个有效答案
//
// Related Topics 数组 哈希表
// 👍 10552 👎 0
public class TwoSum {
    public static void main(String[] args) {
        int[] nums = new int[]{2, 7, 11, 15};
        int target = 9;
        long startTime = System.currentTimeMillis();
        // 1ms
        System.out.println(Arrays.toString(twoSum(nums, target)));
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
        startTime = System.currentTimeMillis();
        // 0ms
        System.out.println(Arrays.toString(twoSum1(nums, target)));
        endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
    }

    public static int[] twoSum(int[] nums, int target) {
        // 0(n^2) 暴力求解
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }

    public static int[] twoSum1(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        // o(n) 第一个循环遍历虽有，map.get查找i之前的数，如果有对应的key，则输出
        for (int i = 0; i < nums.length; i++) {
            // 判断hashmap中是否存在对应的key
            if (map.containsKey(target - nums[i])) {
                // 如果存在则返回对应的index
                return new int[]{map.get(target - nums[i]), i};
            }
            // 添加 value,index到hashmap中
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}

