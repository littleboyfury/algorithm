//设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
//
// 实现 MinStack 类:
//
//
// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。
//
//
//
//
// 示例 1:
//
//
//输入：
//["MinStack","push","push","push","getMin","pop","top","getMin"]
//[[],[-2],[0],[-3],[],[],[],[]]
//
//输出：
//[null,null,null,null,-3,null,0,-2]
//
//解释：
//MinStack minStack = new MinStack();
//minStack.push(-2);
//minStack.push(0);
//minStack.push(-3);
//minStack.getMin();   --> 返回 -3.
//minStack.pop();
//minStack.top();      --> 返回 0.
//minStack.getMin();   --> 返回 -2.
//
//
//
//
// 提示：
//
//
// -2³¹ <= val <= 2³¹ - 1
// pop、top 和 getMin 操作总是在 非空栈 上调用
// push, pop, top, and getMin最多被调用 3 * 10⁴ 次
//
//
// Related Topics 栈 设计 👍 1421 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
class MinStack {
  stack: number[]
  min: number
  minMap: Map<number, number>

  constructor() {
    this.minMap = new Map<number, number>()
    this.min = Number.MAX_SAFE_INTEGER
    this.stack = []
  }

  push(val: number): void {
    this.stack.push(val)
    if (val < this.min) {
      this.min = val
    }
    if (this.minMap.has(val)) {
      this.minMap.set(val, this.minMap.get(val)! + 1)
    } else {
      this.minMap.set(val, 1)
    }
  }

  pop(): void {
    if (this.stack.length) {
      const top = this.stack.pop() as number
      const mapVal: number = this.minMap.get(top) as number
      if (mapVal === 1) {
        this.minMap.delete(top)
        this.min = Number.MAX_SAFE_INTEGER
        for (const val of this.minMap.keys()) {
          if (this.min > val) {
            this.min = val
          }
        }
      } else {
        this.minMap.set(top, mapVal - 1)
      }
      if (this.stack.length === 0) {
        this.min = Number.MAX_SAFE_INTEGER
      }
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.min
  }
}

const obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin())
obj.pop()
console.log(obj.top())
console.log(obj.getMin())

