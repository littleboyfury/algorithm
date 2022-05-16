// 实现函数柯里化
function curry(fn) {
  // 闭包缓存 fn
  return function curryFn(...args) {
    // 闭包缓存 args
    if (fn.length > args.length) {
      // 如果参数小于函数参数，继续返回柯里化函数
      return function () {
        // 递归调用
        return curryFn(...args.concat(Array.from(arguments)))
      }
    }
    return fn(...args)
  }
}

function add(a, b, c, d) {
  return a + b + c + d
}

const curried = curry(add)

const fn1 = curried(1)
const fn2 = fn1(2)
const fn3 = fn2(3)
console.log(fn3(4))
console.log(fn3(4, 5))
console.log(fn3(4))