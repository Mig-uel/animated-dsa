function merge(array1, array2) {
  const merged = []

  let x = 0
  let y = 0

  while (x < array1.length && y < array2.length) {
    if (array1[x] < array2[y]) {
      merged.push(array1[x])
      x++
    } else {
      merged.push(array2[y])
      y++
    }
  }

  while (x < array1.length) {
    merged.push(array1[x])
    x++
  }

  while (y < array2.length) {
    merged.push(array2[y])
    y++
  }

  return merged
}

function merge_sort(array) {
  if (array.length === 1) return array

  const mid = Math.floor(array.length / 2)

  const left = merge_sort(array.slice(0, mid))
  const right = merge_sort(array.slice(mid))

  return merge(left, right)
}

console.log(merge_sort([3, 1, 4, 2]))
