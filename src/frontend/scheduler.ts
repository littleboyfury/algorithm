class Scheduler {
  // 并发数
  concurrency: number
  // 当前运行数量
  currentConcurrency: number = 0
  // 阻塞队列
  queue: Array<any> = []

  constructor(concurrency: number) {
    // 最大并发数量
    this.concurrency = concurrency
  }

  async add(callback: () => any) {
    // 如果超过了最大并发数量
    if (this.currentConcurrency >= this.concurrency) {
      // 阻塞在这里
      await new Promise(resolve => this.queue.push(resolve))
    }
    // 增加当前运行数
    this.currentConcurrency++
    // 运行当前函数
    const res = await callback()
    // 减少当前运行数
    this.currentConcurrency--

    // 判断队列中是否还有多余任务
    if (this.queue.length) {
      // 解除阻塞
      this.queue.shift()()
    }
    // 返回执行结果
    return res
  }
}

const timeout = (time, value) => new Promise(resolve => {
  setTimeout(() => resolve(value), time)
})
const scheduler = new Scheduler(2)
const addTask = (time, order, value?) => {
  return scheduler.add(() => timeout(time, value))
    .then((value) => {
      console.log(order)
      return value
    })
}

addTask(1000, '1', 'value111111').then(value => console.log(value))
addTask(500, '2')
addTask(300, '3', '311111').then(value => console.log(value))
addTask(400, '4')
// output: 2 3 1 4