// 实现 arrange('William').wait(5).do('commit').wait(5).do('push').execute();
class Arrange {
  value: any
  queue: Array<() => Promise<any>> = []

  constructor(value: any) {
    this.value = value
  }

  wait(delay: number): Arrange {
    // push 一个函数，返回 Promise 的一个定时器
    this.queue.push(() => new Promise(resolve => {
      setTimeout(() => {
        resolve('delay ' + delay)
      }, delay)
    }))
    return this
  }

  do(action: string): Arrange {
    // push 一个函数，返回 Promise 的值
    this.queue.push(() => {
      return new Promise(resolve => resolve(action))
    })
    return this
  }

  /**
   * 同步调用
   */
  async execute() {
    for (const fn of this.queue) {
      const res = await fn()
      console.log(res)
    }
    console.log(this.value)
  }

  /**
   * 异步调用
   */
  syncExecute() {
    if (this.queue.length) {
      this.queue.shift()!()
        .then(res => {
          console.log(res)
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
