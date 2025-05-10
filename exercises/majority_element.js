/**
 * Majority Element
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than n/2 times.
 * You can assume the a majority element always exists in the array.
 */
function majority_element(nums) {
  const map = {}
  const size = Math.floor(nums.length / 2)

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (num in map) {
      map[num] += 1

      if (map[num] > size) return num
    } else map[num] = 1
  }
}

console.log(majority_element([2, 2, 1, 1, 1, 2, 2]))
