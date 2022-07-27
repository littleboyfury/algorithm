// 剑指 Offer 09. 用两个栈实现队列
// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
//
//
//
// 示例 1：
//
// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
//   [[],[3],[],[]]
// 输出：[null,null,3,-1]
// 示例 2：
//
// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
//   [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]
// 提示：
//
// 1 <= values <= 10000
// 最多会对 appendTail、deleteHead 进行 10000 次调用
class CQueue {

  private queue: number[]

  constructor() {
    this.queue = []
  }

  appendTail(value: number): void {
    this.queue.push(value)
  }

  deleteHead(): number {
    const first = this.queue.shift()
    return first || -1
  }
}

class CQueue1 {

  private outStack: number[]
  private inStack: number[]

  constructor() {
    this.outStack = []
    this.inStack = []
  }

  appendTail(value: number): void {
    this.inStack.push(value)
  }

  deleteHead(): number {
    if (!this.outStack.length) {
      if (!this.inStack.length) {
        return -1
      }
      // 把入栈的值放入出栈
      while(this.inStack.length) {
        // 清空入栈的值，放入出栈
        this.outStack.push(this.inStack.pop() as number)
      }
    }
    return this.outStack.pop() as number
  }
}

console.time('test')
const queue = new CQueue()
console.log(queue.deleteHead())
queue.appendTail(5)
queue.appendTail(2)
console.log(queue.deleteHead())
console.log(queue.deleteHead())

console.timeEnd('test')
console.time('test')
const queue1 = new CQueue1()
console.log(queue1.deleteHead())
queue1.appendTail(5)
queue1.appendTail(2)
console.log(queue1.deleteHead())
console.log(queue1.deleteHead())
console.timeEnd('test')
