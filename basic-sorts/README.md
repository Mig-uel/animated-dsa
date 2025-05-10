## Basic Sorts

## Basic Sorts: Bubble Sort - Intro

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name from the way smaller elements "bubble" to the top of the list.

Let's say we have an array of integers:

```plaintext
[4, 2, 6, 5, 1, 3]
```

We start by comparing the first item (4) with the second item (2). If the first item is greater than the second item, we swap them. In this case, 4 is greater than 2, so we swap them:

```plaintext
[2, 4, 6, 5, 1, 3]
```

Next, we compare the second item (4) with the third item (6). Since 4 is less than 6, we don't swap them:

```plaintext
[2, 4, 6, 5, 1, 3]
```

Next, we compare the third item (6) with the fourth item (5). Since 6 is greater than 5, we swap them:

```plaintext
[2, 4, 5, 6, 1, 3]
```

Next, we compare the fourth item (6) with the fifth item (1). Since 6 is greater than 1, we swap them:

```plaintext
[2, 4, 5, 1, 6, 3]
```

Finally, we compare the fifth item (6) with the sixth item (3). Since 6 is greater than 3, we swap them:

```plaintext
[2, 4, 5, 1, 3, 6]
```

At this point, we have completed one pass through the list. The largest element (6) has "bubbled" to the end of the list. We repeat this process for the rest of the elements until the entire list is sorted.

## Basic Sorts: Bubble Sort - Code

```javascript
function bubble_sort(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }

  return nums
}
```

Explanation:

- The outer loop iterates from the end of the array to the beginning, ensuring that the largest unsorted element is moved to its correct position in each pass.
- The inner loop iterates through the unsorted portion of the array, comparing adjacent elements and swapping them if they are in the wrong order.
- The process continues until the entire array is sorted.
- The time complexity of bubble sort is O(n^2) in the worst and average cases, making it inefficient for large datasets. However, it is simple to understand and implement.

## Basic Sorts: Selection Sort - Intro

Selection sort is a simple sorting algorithm that divides the input list into two parts: a sorted part and an unsorted part. The algorithm repeatedly selects the smallest (or largest, depending on the order) element from the unsorted part and moves it to the end of the sorted part.

Let's say we have an array of integers:

```plaintext
[4, 2, 6, 5, 1, 3]
```

For selection sort, we have to keep track of the indexes.

We start by assuming the first element (4) is the smallest. We will assign the index of it to a variable called `minIndex`. We then compare it with the rest of the elements in the array. If we find an element smaller than 4, we update `minIndex` to that element's index.

After we have gone through the entire array, we swap the element at `minIndex` with the first element (4). In this case, we find that 1 is smaller than 4, so we swap them:

```plaintext
[1, 2, 6, 5, 4, 3]
```

Next, we repeat the process for the rest of the array. We assume the second element (2) is the smallest and compare it with the rest of the elements. Since 2 is already the smallest, we don't need to swap anything:

```plaintext
[1, 2, 6, 5, 4, 3]
```

We continue this process until the entire array is sorted. The final sorted array will be:

```plaintext
[1, 2, 3, 4, 5, 6]
```

## Basic Sorts: Selection Sort - Code

```javascript
function selection_sort(nums) {
  let min // var to hold min index

  // loop through entire array
  for (let i = 0; i < nums.length - 1; i++) {
    min = i // set min to current index

    // loop starts at i + 1 because at i, element should be sorted already
    for (let j = i + 1; j < nums.length; j++) {
      // compare element at j to element before it
      if (nums[j] < nums[min]) {
        min = j
      }
    }

    // if the lowest isn't itself
    if (i !== min) {
      let temp = nums[i]
      nums[i] = nums[min]
      nums[min] = temp
    }
  }

  return nums
}
```

Explanation:

- The outer loop iterates through the entire array, treating each element as the current minimum.
- The inner loop iterates through the unsorted portion of the array, comparing each element to the current minimum.
- If a smaller element is found, we update `min` to its index.
- After finding the minimum element in the unsorted portion, we swap it with the current element.
- The process continues until the entire array is sorted.
- The time complexity of selection sort is O(n^2) in the worst and average cases, making it inefficient for large datasets. However, it is simple to understand and implement.

## Basic Sorts: Insertion Sort - Intro

Insertion sort is a simple sorting algorithm that builds a sorted array (or list) one element at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

Insertion sort always starts with the second element in the array. It compares it with the first element and inserts it into the correct position in the sorted part of the array. It then moves to the next element and repeats the process until the entire array is sorted.

## Basic Sorts: Insertion Sort - Code

Let's say we have an array of integers:

```plaintext
[1, 2, 4, 5, 5, 6]
```

```javascript
function insertion_sort(nums) {
  let temp

  for (let i = 1; i < nums.length; i++) {
    temp = nums[i]

    // j points to the item before i
    for (var j = i - 1; nums[j] > temp && j > -1; j--) {
      nums[j + 1] = nums[j]
    }

    nums[j + 1] = temp
  }

  return nums
}
```

Explanation:

- The outer loop iterates through the array starting from the second element.
- The inner loop compares the current element with the elements before it and inserts it into the correct position.
- The process continues until the entire array is sorted.
- The time complexity of insertion sort is O(n^2) in the worst and average cases, making it inefficient for large datasets. However, it is efficient for small datasets and is often used as a subroutine in more complex algorithms.
