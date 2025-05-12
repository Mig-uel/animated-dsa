# Merge Sort

## Merge Sort: Overview

Merge Sort is a divide-and-conquer algorithm that sorts an array by recursively dividing it into two halves, sorting each half, and then merging the sorted halves back together. It is known for its efficiency and stability, making it a popular choice for sorting large datasets.

It has a time complexity of O(n log n) in the average and worst cases, making it suitable for large datasets. Merge Sort is also stable, meaning that it preserves the relative order of equal elements in the sorted output.

It is particularly useful for sorting linked lists and external sorting, where data is too large to fit into memory.

Merge sort is our first sorting algorithm that uses recursion and it leverages the idea that if you have two sorted lists, you can merge them fairly easily.

**Quick Overview:**

What merge sort does is it will take a list and cut it in half, again and again until we have a single item array. By definition, a single item array is sorted.

Then, we will merge those arrays back together in a sorted manner. So, we will take two sorted arrays and merge them into one sorted array.

## Merge Sort: Merge Intro

We will use a helper function called `merge` that we are going to use in our merge sort algorithm.

The `merge` function will take two sorted arrays and merge them into one sorted array. The idea is to compare the first elements of both arrays and add the smaller one to the `merged` array. We will continue this process until we have merged all the elements from both arrays.

We will also need to handle the case where one of the arrays is empty. In that case, we will simply add the remaining elements from the other array to the `merged` array.

We will use two pointers to keep track of the current index of each array. We will also need to create a new array to store the merged result.

## Merge Sort: Merge Code

Our two sorted arrays:

```plaintext
[1, 3, 7, 8] and [2, 4, 5, 6]
```

```js
function merge(array1, array2) {
  let combined = []

  let i = 0 // array1 pointer
  let j = 0 // array2 pointer

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array[i])
      i++
    } else {
      combined.push(array[j])
      j++
    }
  }

  while (i < array1.length) {
    combined.push(array1[i])
    i++
  }

  while (j < array2.length) {
    combined.push(array2[j])
    j++
  }
}
```

Explanation:

- We create a new array called `combined` to store the merged result.
- We use two pointers `i` and `j` to keep track of the current index of each array.
- We use a while loop to compare the elements of both arrays and add the smaller one to the `combined` array.
- We continue this process until we have merged all the elements from both arrays.
- We use two additional while loops to handle the case where one of the arrays is empty. In that case, we simply add the remaining elements from the other array to the `combined` array.
- Finally, we return the `combined` array.
- The time complexity of the merge function is O(n), where n is the total number of elements in both arrays.
- The space complexity is also O(n), as we are creating a new array to store the merged result.
- The merge function is stable, as it preserves the relative order of equal elements in the sorted output.

## Merge Sort: Merge Sort - Intro

The big thing merge sort is going to do is take a list and cut it in half, again and again until we have a single item array. By definition, a single item array is sorted.

Merge sort is going to recursively call itself on the left and right side of the array. Once we have our two sorted arrays, we will merge them back together in a sorted manner.

1. It has to do the same thing over and over again which is breaking the array in half.
2. There has to be a base case. The base case is when the array is of length 1. If the array is of length 1, we can return it as it is already sorted.
3. Once we have gotten to the base case, we use the merge function to merge the two sorted arrays back together.

## Merge Sort: Merge Sort - Code

Array to sort:

```plaintext
[3, 1, 4, 2]
```

```js
function merge_sort(array) {
  if (array.length === 1) return array

  const midIndex = Math.floor(array.length / 2)

  // we have two arrays split in half but this won't work
  // because we need a sorted array
  // let left = array.slice(0, midIndex)
  // let right = array.slice(midIndex)

  const left = merge_sort(array.slice(0, midIndex))
  const right = merge_sort(array.slice(midIndex))

  return merge(left, right)
}
```

Explanation:

- We check if the array length is 1. If it is, we return the array as it is already sorted.
- We calculate the mid index of the array.
- We split the array into two halves using the `slice` method.
- We recursively call the `merge_sort` function on the left and right halves of the array.
- We merge the two sorted arrays using the `merge` function and return the result.
- The time complexity of the merge sort algorithm is O(n log n), where n is the number of elements in the array.
- The space complexity is O(n), as we are creating new arrays for the left and right halves of the array.
