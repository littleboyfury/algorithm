const arr = [1, 2, 3, [2, 3, [4, 1, 2, [2, 1, [3, 1]]]], [[1, 2, [3, 4], [1, 2]], 2, [2, 3]]]

/**
 * 拍平所有的层数
 * @param arr
 */
function flatArray1(arr: Array<any>) {
  const res: number[] = []
  for (const item of arr) {
    if (Array.isArray(item)) {
      // 如果该项是数组，则递归拍平
      res.push(...flatArray1(item))
    } else {
      // 否则添加
      res.push(item)
    }
  }
  return res
}

/**
 * 模拟 es2019 flat() 函数
 * @param arr 需要拍平的数组
 * @param depth 需要拍平的层数
 */
function flatArray(arr: any[], depth = 1) {
  /**
   * 牌组数组
   * @param arr 子项
   * @param depthCurrent 当前层数
   */
  function flat(arr, depthCurrent) {
    const res: Array<any> = []
    for (const item of arr) {
      if (Array.isArray(item)) {
        if (depthCurrent <= depth) {
          res.push(...flat(item, depthCurrent + 1))
        } else {
          res.push(item)
        }
      } else {
        res.push(item)
      }
    }
    return res
  }


  // 原数组顺序
  return flat(arr, 1)
  // 去重
  // return [...new Set(flat(arr, 1))]
}

const depth = Infinity
console.log(arr.flat(depth))
console.log(flatArray(arr, depth))
console.log(flatArray1(arr))

export default ''