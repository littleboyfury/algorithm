//给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
//
// 请必须使用时间复杂度为 O(log n) 的算法。
//
//
//
// 示例 1:
//
//
//输入: nums = [1,3,5,6], target = 5
//输出: 2
//
//
// 示例 2:
//
//
//输入: nums = [1,3,5,6], target = 2
//输出: 1
//
//
// 示例 3:
//
//
//输入: nums = [1,3,5,6], target = 7
//输出: 4
//
//
//
//
// 提示:
//
//
// 1 <= nums.length <= 10⁴
// -10⁴ <= nums[i] <= 10⁴
// nums 为 无重复元素 的 升序 排列数组
// -10⁴ <= target <= 10⁴
//
// Related Topics 数组 二分查找 👍 1593 👎 0


function searchInsert(nums: number[], target: number): number {
  // 如果比第一个数小，则放在第 0 个位置
  if (target < nums[0]) {
    return 0
  } else if (target > nums[nums.length - 1]) {
    // 如果比最后一个位置大，放在最后一个位置
    return nums.length
  }

  // 二分查找
  let first = 0, last = nums.length, middle = 0

  while (first <= last) {

    // 求解中位数
    middle = Math.floor((first + last) / 2)
    const middleNum = nums[middle]

    if (middleNum < target) {
      // 如果比中间的大，则在后半段
      first = middle + 1
      // 这里说明数组里面没有和 target 相当的值，放在 first 后面即可
      if (first > last) {
        return first
      }
    } else if (middleNum > target) {
      // 如果比中间的值小，则在前半段
      last = middle - 1
    } else {
      // 如果相当，则返回当前位置
      return middle
    }
  }
  return middle
}

console.log(searchInsert([1, 3, 5, 6], 7), 4)
console.log(searchInsert([1, 3, 5, 6], 2), 1)
console.log(searchInsert([1, 3, 5, 6], 5), 2)
console.log(searchInsert([1, 3, 5, 6], 0), 0)
console.log(searchInsert([1, 3], 2), 1)
console.log(searchInsert([1], 1), 0)

export default ''
