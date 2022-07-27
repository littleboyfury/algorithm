// 剑指 Offer 06. 从尾到头打印链表
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。


// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]


// 限制：

// 0 <= 链表长度 <= 10000

function reversePrint(head) {
  const arr = []
  if (head) {
    read(head, arr)
  }
  return arr
}

function read(node, arr) {
  if (node.next !== null) {
    // 递归到最后的位置
    read(node.next, arr)
  }
  // 解除递归
  arr.push(node.val)
}

const head = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 2,
      next: null
    }
  }
}

console.log(reversePrint(head))
