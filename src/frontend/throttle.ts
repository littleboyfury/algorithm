function throttle(delay: number, fn: Function) {
  let last: number = 0
  return function (...args) {
    const now = new Date().getTime()
    if (now - last > delay) {
      last = now
      fn(...args)
    }
  }
}