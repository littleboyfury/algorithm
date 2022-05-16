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
// Related Topics 递归 链表 数学 👍 8083 👎 0

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const header = new ListNode()
  let temp = header
  let next = 0
  while (l1 && l2) {
    const val = l1.val + l2.val + next
    if (val >= 10) {
      temp.val = val - 10
      next = 1
    } else {
      temp.val = val
      next = 0
    }
    if (l1.next || l2.next) {
      temp.next = new ListNode()
      temp = temp.next
    }
    l1 = l1.next
    l2 = l2.next
  }
  while (l1) {
    const val = l1.val + next
    if (val >= 10) {
      temp.val = val - 10
      next = 1
    } else {
      temp.val = val
      next = 0
    }
    if (l1.next) {
      temp.next = new ListNode()
      temp = temp.next
    }
    l1 = l1.next
  }
  while (l2) {
    const val = l2.val + next
    if (val >= 10) {
      temp.val = val - 10
      next = 1
    } else {
      temp.val = val
      next = 0
    }
    if (l2.next) {
      temp.next = new ListNode()
      temp = temp.next
    }
    l2 = l2.next
  }
  if (next) {
    temp.next = new ListNode(next)
  }
  return header
}

// const list1 = toListNode([9, 9, 9, 9, 9, 9, 9])
// const list2 = toListNode([9, 9, 9, 9])
const list1 = toListNode([3, 7])
const list2 = toListNode([9, 2])
// console.dir(list1, {depth: 10})

console.dir(addTwoNumbers(list1, list2), { depth: 10 })


function toListNode(nums: number[]) {
  const header = new ListNode()
  let tem = header
  nums.forEach(v => {
    tem.next = new ListNode(v)
    tem = tem.next
  })
  return header.next
}


export default ''