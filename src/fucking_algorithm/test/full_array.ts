const arr = [1, 2, 3]
// 结果集
const result: number[] = []
// 元素是否添加
const isAdd: Set<number> = new Set<number>()

function fullArray() {

  // 触发结束条件
  if (result.length === arr.length) {
    console.log(result)
    return
  }
  for (let i = 0; i < arr.length; i++) {
    //判断是否添加
    if (isAdd.has(arr[i])) {
      continue
    }

    // 做选择
    result.push(arr[i])
    isAdd.add(arr[i])
    fullArray()
    // 撤销选择
    result.pop()
    isAdd.delete(arr[i])
  }
}

fullArray()
