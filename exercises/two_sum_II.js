/**
 * Two Sum II - Input Array Is Sorted
 *
 * Given a 1-indexed array of integers numbers that is already
 * sorted in a non-decreasing order, find two numbers that they
 * add up to a specific target number.
 *
 * Return the indices of the two numbers (as an array) such that they add
 * up to target, with index1 < index2.
 *
 * Your solution must use constant space space (no hash maps)
 *
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2] // because 2 + 7 = 9
 */
function two_sum_2(numbers, target) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]

    if (sum === target) {
      return [left + 1, right + 1]
    }

    if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

console.log(two_sum_2([2, 7, 11, 15], 9))
