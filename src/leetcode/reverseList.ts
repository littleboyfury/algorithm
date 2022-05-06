//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
//
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,4,5]
//输出：[5,4,3,2,1]
//
//
// 示例 2：
//
//
//输入：head = [1,2]
//输出：[2,1]
//
//
// 示例 3：
//
//
//输入：head = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000
//
//
//
//
// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
//
//
// Related Topics 递归 链表 👍 2500 👎 0

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }
  // 前一个节点
  let last: ListNode | null = null
  // 当前节点
  // let temp = head
  // 下一个节点
  let next: ListNode | null = head?.next
  while (true) {
    // 指针反转
    head.next = last
    // 向前移动
    last = head
    if (!next) {
      break
    }
    head = next
    next = next.next
  }
  return head
}

function reverseList1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }
  const last: ListNode = reverseList1(head.next) as ListNode
  // 将当前节点的下一个节点的下一个节点指向当前节点
  // 该操作改变了后面节点指向，改为指向了前一个节点
  head.next.next = head
  // 把当前节点的下一个节点设置为 null，断开当前链接，不然就是循环
  head.next = null
  return last
}

const a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)
a.next.next.next.next = new ListNode(5)
a.next.next.next.next.next = new ListNode(6)


console.time('self')
console.dir(reverseList(a), { depth: 10 })
console.timeEnd('self')

const b = new ListNode(1)
b.next = new ListNode(2)
b.next.next = new ListNode(3)
b.next.next.next = new ListNode(4)
b.next.next.next.next = new ListNode(5)
b.next.next.next.next.next = new ListNode(6)

console.time('other')
console.dir(reverseList1(b), { depth: 10 })
console.timeEnd('other')
