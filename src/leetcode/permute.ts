//给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,2,3]
//输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
//
// 示例 2：
//
//
//输入：nums = [0,1]
//输出：[[0,1],[1,0]]
//
//
// 示例 3：
//
//
//输入：nums = [1]
//输出：[[1]]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同
//
// Related Topics 数组 回溯
// 👍 1493 👎 0


function permute(nums: number[]): number[][] {
  const result: number[][] = []
  permuteExec(nums, new Set<number>(), [], result)
  return result
}

/**
 *
 * @param nums 需要排列的数组
 * @param numSet 已经排过的数值
 * @param resultOne 其中一个解
 * @param result 所有的解
 */
function permuteExec(nums: number[], numSet: Set<number>, resultOne: number[], result: number[][]) {
  if (resultOne.length === nums.length) {

    // 需要复制一份数组，不然result中的值会跟随resultOne改变而改变
    result.push(resultOne.concat())
    return
  }

  for (let i = 0; i < nums.length; i++) {

    // 剪枝
    if (numSet.has(nums[i])) {
      continue
    }

    // 满足条件添加
    numSet.add(nums[i])
    resultOne.push(nums[i])
    permuteExec(nums, numSet, resultOne, result)

    // 回溯
    numSet.delete(nums[i])
    resultOne.pop()
  }
}

/**
 [
 [ 1, 2, 3 ],
 [ 1, 3, 2 ],
 [ 2, 1, 3 ],
 [ 2, 3, 1 ],
 [ 3, 1, 2 ],
 [ 3, 2, 1 ]
 ]
 permute: 3.722ms
 */
console.time('permute')
console.log(permute([1, 2, 3]))
console.timeEnd('permute')

