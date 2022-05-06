//将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//
//
//
// 示例 1：
//
//
//输入：l1 = [1,2,4], l2 = [1,3,4]
//输出：[1,1,2,3,4,4]
//
//
// 示例 2：
//
//
//输入：l1 = [], l2 = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：l1 = [], l2 = [0]
//输出：[0]
//
//
//
//
// 提示：
//
//
// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列
//
// Related Topics 递归 链表 👍 2411 👎 0

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list2) {
    return list1
  }
  if (!list1) {
    return list2
  }
  // 创建新的头节点
  const head = new ListNode()
  let tem = head
  while (list1 && list2) {
    // 合并链表
    if (list1.val > list2.val) {
      // tem 的下一个节点指向小的节点
      tem!.next = list2
      // tem 向后移
      tem = tem.next
      // 拼接的节点向后移
      list2 = list2.next
    } else {
      tem.next = list1
      tem = tem.next
      list1 = list1.next
    }
  }
  // 处理多余的节点
  if (list1) {
    tem.next = list1
  }
  if (list2) {
    tem.next = list2
  }
  // 不需要第一个节点
  return head.next
}


const a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(4)
a.next.next.next = new ListNode(6)
a.next.next.next.next = new ListNode(8)
a.next.next.next.next.next = new ListNode(10)

const b = new ListNode(1)
b.next = new ListNode(4)
b.next.next = new ListNode(5)
b.next.next.next = new ListNode(8)
b.next.next.next.next = new ListNode(15)
b.next.next.next.next.next = new ListNode(20)
b.next.next.next.next.next.next = new ListNode(30)
b.next.next.next.next.next.next.next = new ListNode(40)


console.dir(mergeTwoLists(a, b), { depth: 100 })

export default ''
