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

console.log(merge([1, 3, 5], [2, 5, 6, 8]))
