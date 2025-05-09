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
