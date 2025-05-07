/**
 * Two Sum
 *
 * Given an array of integers, nums, and an integer, target, return the
 * indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and
 * you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 */

function two_sum(nums, target) {
  const seen = {}

  for (let i = 0; i < nums.length; i++) {
    const current_number = nums[i]
    const complement = target - nums[i]

    if (complement in seen) return [seen[complement], i]

    seen[current_number] = i
  }

  return []
}

console.log(two_sum([2, 7, 11, 15], 9))
