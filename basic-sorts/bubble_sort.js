// function bubble_sort(nums) {
//   let swapped

//   do {
//     swapped = false

//     for (let i = 0; i < nums.length - 1; i++) {
//       if (nums[i] > nums[i + 1]) {
//         const temp = nums[i]
//         nums[i] = nums[i + 1]
//         nums[i + 1] = temp
//         swapped = true
//       }
//     }
//   } while (swapped)

//   return nums
// }

// function bubble_sort(arr) {
//   const nums = arr.slice()

//   // outer loop
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 0; j < nums.length - 1 - i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         const temp = nums[j]
//         nums[j] = nums[j + 1]
//         nums[j + 1] = temp
//       }
//     }
//   }

//   return nums
// }

function bubble_sort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }

  return nums
}

console.log(bubble_sort([4, 2, 6, 5, 1, 3]))
