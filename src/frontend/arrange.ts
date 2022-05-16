// 实现 arrange('William').wait(5).do('commit').wait(5).do('push').execute();
class Arrange {
  value: any
  queue: Array<() => Promise<any>> = []

  constructor(value: any) {
    this.value = value
  }

  wait(delay: number): Arrange {
    // push 一个函数，返回 Promise 的一个定时器，使用 Promise 可以保证执行顺序
    this.queue.push(() => new Promise(resolve => {
      setTimeout(() => {
        resolve('delay ' + delay)
      }, delay)
    }))

    // 返回实例对象
    return this
  }

  do(action: string): Arrange {
    // push 一个函数，返回 Promise 的值
    this.queue.push(() => {
      return new Promise(resolve => resolve(action))
    })
    // 返回实例对象
    return this
  }

  /**
   * 同步调用，利用 async-await 进行等待
   */
  async execute() {
    for (const fn of this.queue) {
      const res = await fn()
      console.log(res)
    }
    console.log(this.value)
  }

  /**
   * 异步调用，利用 Promise.then 进行递归等待，保证顺序执行
   */
  syncExecute() {
    if (this.queue.length) {
      // 推出数组第一个开始执行
      this.queue.shift()!()
        .then(res => {
          console.log(res)
          // 递归执行下一个指令
          this.syncExecute()
        })
    } else {
      console.log(this.value)
    }
  }
}

function arrange(value: any): Arrange {
  return new Arrange(value)
}

arrange('William')
  .wait(1000)
  .do('commit')
  .do('push2')
  .wait(1000)
  .do('push3')
  .wait(1000)
  .do('push4')
  .wait(1000)
  .do('push5')
  .execute()
// .syncExecute()

// 结果
// delay 1000
// commit
// push2
// delay 1000
// push3
// delay 1000
// push4
// delay 1000
// push5
// William
