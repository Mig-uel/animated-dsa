// function insertion_sort(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     const temp = nums[i]
//     let j = i - 1 // left variable of i

//     while (j >= 0 && nums[j] > temp) {
//       nums[j + 1] = nums[j]
//       j--
//     }

//     nums[j + 1] = temp
//   }

//   return nums
// }

// console.log(insertion_sort([9, 1, 8, 2, 7, 3, 6, 5, 4]))

function insertion_sort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let NTI = nums[i]

    for (let j = i - 1; nums[j] > NTI && j > -1; j--) {
      nums[j + 1] = nums[j]
      nums[j] = NTI
    }
  }

  return nums
}

console.log(insertion_sort([8, 20, -2, 4, 8, 6]))
