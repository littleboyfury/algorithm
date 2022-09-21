//给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
//
// 如果数组中不存在目标值 target，返回 [-1, -1]。
//
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
//
//
//
// 示例 1：
//
//
//输入：nums = [5,7,7,8,8,10], target = 8
//输出：[3,4]
//
// 示例 2：
//
//
//输入：nums = [5,7,7,8,8,10], target = 6
//输出：[-1,-1]
//
// 示例 3：
//
//
//输入：nums = [], target = 0
//输出：[-1,-1]
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 10⁵
// -10⁹ <= nums[i] <= 10⁹
// nums 是一个非递减数组
// -10⁹ <= target <= 10⁹
//
//
// Related Topics 数组 二分查找 👍 1911 👎 0


function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1]
  }

  return [
    search(nums, target, 0, nums.length - 1, true),
    search(nums, target, 0, nums.length - 1, false),
  ]
}

function search(nums: number[], target: number, left: number, right: number, isLeft = false) {
  if (left > right) {
    return -1
  }
  const fn = isLeft ? Math.floor : Math.ceil
  const middle = fn((left + right) / 2)

  if (nums[middle] === target) {
    if (left === middle || right === middle) {
      return middle
    }
    if (isLeft) {
      return search(nums, target, left, middle, isLeft)
    }
    return search(nums, target, middle, right, isLeft)
  } else if (nums[middle] > target) {
    return search(nums, target, left, middle - 1, isLeft)
  } else {
    return search(nums, target, middle + 1, right, isLeft)
  }
}

let nums = [5, 7, 7, 8, 8, 10], target = 8
console.log(searchRange(nums, target))
nums = [1, 1]
target = 1
console.log(searchRange(nums, target))
nums = [5, 7, 7, 8, 8, 10]
target = 6
console.log(searchRange(nums, target))
nums = []
target = 0
console.log(searchRange(nums, target))


