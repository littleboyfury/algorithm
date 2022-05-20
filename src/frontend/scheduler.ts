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

  addSync(callback: () => Promise<any>) {
    // 返回一个 promise 对象
    return new Promise(resolve => {
      if (this.currentConcurrency >= this.concurrency) {
        // 使用 promise 进行阻塞，因为没有调用 resolve1 方法
        new Promise(resolve1 => {
          this.queue.push(resolve1)
        })
          .then(() => {
            // 解除后则可以运行任务
            this.runJob(resolve, callback)
          })
      } else {
        // 运行任务
        this.runJob(resolve, callback)
      }
    })
  }

  runJob(resolve, callback: () => Promise<any>) {
    // 开始运行任务
    this.currentConcurrency++
    callback()
      .then(res => {
        // 任务执行完毕
        this.currentConcurrency--
        if (this.queue.length) {
          // 解除后面的任务
          this.queue.shift()()
        }
        // 返回结果
        resolve(res)
      })
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

const addTaskSync = (time, order, value?) => {
  return scheduler.addSync(() => timeout(time, value))
    .then((value) => {
      console.log(order)
      return value
    })
}

addTaskSync(1000, '1', 'value111111').then(value => console.log(value))
addTaskSync(500, '2')
addTaskSync(300, '3', '311111').then(value => console.log(value))
addTaskSync(400, '4')
// output: 2 3 1 4