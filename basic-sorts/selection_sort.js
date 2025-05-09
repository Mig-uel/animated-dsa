/**
 * Selection Sort
 *
 * Selection sort works by selecting the minimum value in a list and swapping
 * it with the first value in the list.
 *
 * It then starts at the second position, selects the smallest value
 * in the remaining list, and swaps it with the second element. It
 * continues iterating through the list and swapping elements until it
 * reaches the end of the list.
 */

function selection_sort(nums) {
  // outer loop: sweep through the whole array n - 1 times
  for (let i = 0; i < nums.length - 1; i++) {
    // assume minimum is the current index
    let minIndex = i

    // inner loop: loop through array finding if another min exists
    for (let j = i + 1; j < nums.length; j++) {
      // compare current value with previous value
      if (nums[j] < nums[minIndex]) {
        // update minIndex if another min is found
        minIndex = j
      }
    }

    // setup temp var to hold the largest value
    const temp = nums[i]
    // swap largest with minimum found
    nums[i] = nums[minIndex]
    nums[minIndex] = temp
  }

  return nums
}

console.log(selection_sort([3, 2, 5, 1]))
