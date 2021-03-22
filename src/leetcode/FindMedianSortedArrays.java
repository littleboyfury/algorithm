package leetcode;

import java.util.Arrays;

/**
 * @author littleboy
 * @date 2021/3/19 15:55
 */

//给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
//
//
//
// 示例 1：
//
//
//输入：nums1 = [1,3], nums2 = [2]
//输出：2.00000
//解释：合并数组 = [1,2,3] ，中位数 2
//
//
// 示例 2：
//
//
//输入：nums1 = [1,2], nums2 = [3,4]
//输出：2.50000
//解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
//
//
// 示例 3：
//
//
//输入：nums1 = [0,0], nums2 = [0,0]
//输出：0.00000
//
//
// 示例 4：
//
//
//输入：nums1 = [], nums2 = [1]
//输出：1.00000
//
//
// 示例 5：
//
//
//输入：nums1 = [2], nums2 = []
//输出：2.00000
//
//
//
//
// 提示：
//
//
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106
//
//
//
//
// 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
// Related Topics 数组 二分查找 分治算法
// 👍 3835 👎 0


public class FindMedianSortedArrays {
    public static void main(String[] args) {
        int[] nums1 = new int[]{1, 2};
        int[] nums2 = new int[]{1};

        long startTime = System.currentTimeMillis();
        // 4ms
        System.out.println(findMedianSortedArrays(nums1, nums2));
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");

        startTime = System.currentTimeMillis();
        // 0ms
        System.out.println(findMedianSortedArrays2(nums1, nums2));
        endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
    }

    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n1 = 0;
        int n2 = 0;
        int n3 = 0;
        int len1 = nums1.length;
        int len2 = nums2.length;
        int[] nums3 = new int[len1 + len2];
        // 合并两个数组 o(m+n)
        while (n1 != len1 || n2 != len2) {
            if (n1 == len1) {
                nums3[n3++] = nums2[n2++];
                continue;
            }
            if (n2 == len2) {
                nums3[n3++] = nums1[n1++];
                continue;
            }
            if (nums1[n1] <= nums2[n2]) {
                nums3[n3++] = nums1[n1++];
            } else {
                nums3[n3++] = nums2[n2++];
            }
        }
        if (nums3.length % 2 == 0) {
            return ((double) nums3[nums3.length / 2 - 1] +
                    (double) nums3[nums3.length / 2]) / 2;
        } else {
            return nums3[nums3.length / 2];
        }
    }

    /**
     * 题解大佬做法
     *
     * @param nums1 数组1
     * @param nums2 数组2
     * @return 中位数
     */
    public static double findMedianSortedArrays2(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int m = nums2.length;
        // 偶数求解的左边的数
        int left = (n + m + 1) / 2;
        // 偶数求解的右边的数
        int right = (n + m + 2) / 2;
        //将偶数和奇数的情况合并，如果是奇数，会求两次同样的 k 。
        return (getKth(nums1, 0, n - 1, nums2, 0, m - 1, left) + getKth(nums1, 0, n - 1, nums2, 0, m - 1, right)) * 0.5;
    }

    /**
     * 求解第K小
     *
     * @param nums1  数组1
     * @param start1 开始
     * @param end1   结束
     * @param nums2  数组2
     * @param start2 开始
     * @param end2   结束
     * @param k      第k小
     * @return 第k小
     */
    private static int getKth(int[] nums1, int start1, int end1, int[] nums2, int start2, int end2, int k) {
        int len1 = end1 - start1 + 1;
        int len2 = end2 - start2 + 1;
        //让 len1 的长度小于 len2，这样就能保证如果有数组空了，一定是 len1
        if (len1 > len2)
            return getKth(nums2, start2, end2, nums1, start1, end1, k);
        if (len1 == 0) return nums2[start2 + k - 1];

        if (k == 1) return Math.min(nums1[start1], nums2[start2]);

        // 处理长度为0的情况
        int i = start1 + Math.min(len1, k / 2) - 1;
        int j = start2 + Math.min(len2, k / 2) - 1;
        // 比较两个数大小
        if (nums1[i] > nums2[j]) {
            return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
        } else {
            return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
        }
    }
}
