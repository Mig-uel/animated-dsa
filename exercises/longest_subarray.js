/**
 * Longest Subarray with Sum <= K
 *
 * Given an array of integers nums and an integer k, return the length of
 * the longest subarray whose sum is less than or equal to k.
 *
 * Input: nums = [1, 2, 1, 0, 1, 1, 0], 4
 * Output = 5
 * Explanation: [1, 2, 1, 0, 0] or [2, 1, 0, 1, 0]
 */
function longest_subarray(arr, k) {
  let sum = 0
  let maxLength = 0

  let left = 0

  for (let right = 0; right < arr.length; right++) {
    // expand window
    sum += arr[right]

    while (sum > k) {
      // shrink window
      sum -= arr[left]
      left++
    }

    // checking for every valid window if it greater than current max
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}

console.log(longest_subarray([5, 1, 6], 1))
