function contains_duplicates(nums) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const current_number = nums[i]

    if (current_number in map) return true
    else map[current_number] = 1
  }

  return false
}

console.log(contains_duplicates([1, 2, 3, 1, 4]))
