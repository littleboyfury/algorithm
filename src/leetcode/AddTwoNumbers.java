package leetcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author littleboy
 * @date 2021/3/19 10:18
 */
//给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
//
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
//
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
//
//
//
// 示例 1：
//
//
//输入：l1 = [2,4,3], l2 = [5,6,4]
//输出：[7,0,8]
//解释：342 + 465 = 807.
//
//
// 示例 2：
//
//
//输入：l1 = [0], l2 = [0]
//输出：[0]
//
//
// 示例 3：
//
//
//输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//输出：[8,9,9,9,0,0,0,1]
//
//
//
//
// 提示：
//
//
// 每个链表中的节点数在范围 [1, 100] 内
// 0 <= Node.val <= 9
// 题目数据保证列表表示的数字不含前导零
//
// Related Topics 递归 链表 数学
// 👍 5836 👎 0
class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}


public class AddTwoNumbers {
    public static void main(String[] args) {
        int[] num1 = new int[]{9, 9, 9, 9, 9, 9, 9};
        int[] num2 = new int[]{9, 9, 9, 9};
        ListNode l1 = createListNode(num1);
        ListNode l2 = createListNode(num2);

        long startTime = System.currentTimeMillis();
        // 1ms
        printListNode(addTwoNumbers(l1, l2));
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
        startTime = System.currentTimeMillis();
        // 0ms
        printListNode(addTwoNumbers1(l1, l2));
        endTime = System.currentTimeMillis();
        System.out.println("程序运行时间：" + (endTime - startTime) + "ms");
    }

    /**
     * 两个链表相加，和大佬还有很大的差距，if判断太多了
     *
     * @param l1 链表1
     * @param l2 链表2
     * @return 相加后的链表
     */
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode sum = new ListNode();
        ListNode tmp = sum;
        // 记录是否有进位
        int ten = 0;
        // 相同段的时候相加
        while (l1 != null && l2 != null) {
            tmp.val = l1.val + l2.val + ten;
            tmp.next = new ListNode();
            // 如果相加大于等于10，表示有进位，需要取余数，否则没有进位
            if (tmp.val >= 10) {
                tmp.val %= 10;
                ten = 1;
            } else {
                ten = 0;
            }
            // 下一个节点
            l1 = l1.next;
            l2 = l2.next;
            // 如果两个同时为null，表示都结束了
            if (l1 == null && l2 == null) {
                // 如果还有进位，则sum的下一个节点的值设置为1
                if (ten == 1) {
                    tmp.next.val = 1;
                    break;
                }
                // 表示链表结束
                tmp.next = null;
            }
            // 迭代sum的下一个
            tmp = tmp.next;
        }
        while (l1 != null) {
            // 如果l1比l2大
            tmp.val = l1.val + ten;
            // 检查进位
            if (tmp.val >= 10) {
                tmp.val %= tmp.val;
                ten = 1;
            } else {
                ten = 0;
            }
            tmp.next = new ListNode();
            l1 = l1.next;
            if (l1 == null) {
                if (ten == 1) {
                    tmp.next.val = 1;
                    break;
                }
                tmp.next = null;
            }
            tmp = tmp.next;
        }
        while (l2 != null) {
            tmp.val = l2.val + ten;
            if (tmp.val >= 10) {
                tmp.val %= tmp.val;
                ten = 1;
            } else {
                ten = 0;
            }
            tmp.next = new ListNode();
            l2 = l2.next;
            if (l2 == null) {
                if (ten == 1) {
                    tmp.next.val = 1;
                    break;
                }
                tmp.next = null;
            }
            tmp = tmp.next;
        }
        return sum;
    }

    /**
     * 大佬题解
     *
     * @param l1 链表1
     * @param l2 链表2
     * @return 相加链表
     */
    public static ListNode addTwoNumbers1(ListNode l1, ListNode l2) {
        ListNode pre = new ListNode(0);
        ListNode cur = pre;
        int carry = 0;
        while (l1 != null || l2 != null) {
            // 如果短的一个链表已经加完了，就用0补充
            int x = l1 == null ? 0 : l1.val;
            int y = l2 == null ? 0 : l2.val;
            int sum = x + y + carry;

            carry = sum / 10;
            sum = sum % 10;
            // 如果是第一个，用pre.next开始记录，保证了最后一个next为null
            cur.next = new ListNode(sum);

            cur = cur.next;
            if (l1 != null)
                l1 = l1.next;
            if (l2 != null)
                l2 = l2.next;
        }
        if (carry == 1) {
            // 如果有进位，填充最后一个
            cur.next = new ListNode(carry);
        }
        return pre.next;
    }

    // 打印链表
    public static void printListNode(ListNode listNode) {
        while (listNode != null) {
            System.out.print(listNode.val + ",");
            listNode = listNode.next;
        }
        System.out.println();
    }

    // 基于数组创建链表
    public static ListNode createListNode(int[] nums) {
        ListNode listNode = new ListNode();
        ListNode tmp = listNode;
        for (int i = 0; i < nums.length && tmp != null; i++) {
            tmp.val = nums[i];
            tmp.next = new ListNode();
            if (i == nums.length - 1) {
                tmp.next = null;
            }
            tmp = tmp.next;
        }
        return listNode;
    }
}



