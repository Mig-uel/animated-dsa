# Big-O

## Big-O Intro

Suppose we have two functions, codes, scripts, or algorithms, how do we know which one is better?

They both accomplish the same thing but they are written differently.

Big-O notation is a way to mathematically figure out which of the two is better, which one runs more efficiently.

Normally, we would want to use the one that runs faster.

This is called time complexity. We don't measure time complexity in time but in the number of operations. The reason we do this is because time can vary based on the machine, the environment, and other factors. What doesn't change is the number of operations. Thus, the time complexity on either machine will be the same.

Time complexity is a way to measure how long an algorithm takes to run as the input size grows.

Also, we can measure space complexity. This is how much memory an algorithm uses as the input size grows.

## Big-O: Worst Case Scenario

When we are dealing with Big-O notation, there are three greek letters that we will often see:

- Omega (Ω): This is the best case scenario. This is the fastest an algorithm can run.
- Theta (Θ): This is the average case scenario. This is the average time an algorithm will take to run.
- Omicron (O): This is the worst case scenario. This is the slowest an algorithm can run.

When we are dealing with Big-O notation, we are usually dealing with the worst case scenario which is the slowest an algorithm can run.

Example: Let's say we are going to build a `for` loop to iterate through an array to find a particular number.

`[1, 2, 3, 4, 5]`

If we are looking for the number `1`, this would be the best case scenario. The loop would only have to run once. (This would be represented as Ω(1))

If we are looking for the number `3`, this would be the average case scenario. The loop would have to run three times. (This would be represented as Θ(n))

If we are looking for the number `5`, this would be the worst case scenario. The loop would have to run five times. (This would be represented as O(n))

When we measure Big-O, we are always measuring the worst case scenario. This is the slowest an algorithm can run.

## Big-O: O(n)

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}
```

This function has a time complexity of O(n). This is because the function will run `n` times. The more items we have, the more times the function will run.

In other words, the worse case scenario is that the function will run `n` times. This is the slowest an algorithm can run.

O(n) is always going to be a straight line. The number of operations are going to be proportional to whatever `n` is.

## Big-O: Drop Constants

Big-O has several ways in which we simplify the notation making things easier. The first one is dropping constants.

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}
```

Our code ran `n` + `n` times. It would make sense to say that the time complexity is O(2n).
But this is where the simplification comes in. We drop the constants. So O(2n) becomes O(n).

This is because the constants don't matter. The number of operations is still going to be proportional to `n`. So we can drop the constants and just say O(n).

## Big-O: O(n^2)

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}
```

This function has a time complexity of O(n^2). This is because the function will run `n` times for each `n` times. The more items we have, the more times the function will run.

In other words, the worse case scenario is that the function will run `n` \* `n` times. This is the slowest an algorithm can run.

O(n^2) is always going to be a parabola. The number of operations are going to be proportional to whatever `n` is squared.

## Big-O: Drop Non-Dominant Terms

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }

  for (let k = 0; k < n; k++) {
    console.log(k)
  }
}
```

The first loop ran O(n^2) times and the second loop ran O(n) times. So we would say that the time complexity is O(n^2 + n).

Let's say `n` is 1000. The first loop would run 1,000,000 times and the second loop would run 1000 times. The first loop is going to dominate the second loop. So we can drop the non-dominant term.

This is because the first loop is going to run a lot more times than the second loop. So we can drop the non-dominant term and just say O(n^2).

So O(n^2 + n) becomes O(n^2).

## Big-O: O(1)

```js
function addItems(n) {
  return n + n
}
```

This function has only one operation. It doesn't matter if `n` is 1 or 1,000,000. The function will always run the same number of times. So we would say that the time complexity is O(1).

What if we add another operation?

```js
function addItems(n) {
  return n + n + n
}
```

This function now has two operations. We are going to simplify this to O(1).

O(1) is often referred to as constant time. This is because the number of operations is constant. It doesn't matter how big `n` is, the function will always run the same number of times. The number of operations does not change as the `n` changes.

On a graph, O(1) is a straight line. O(1) is the most efficient time complexity.

### Big-O: O(log n)

Example: Let's say we have a **SORTED** array of numbers. We want to find a number in the array.

`[1, 2, 3, 4, 5, 6, 7, 8]`

Case 1: Let's say we are looking for the number `1`. We would divide the array in half. We ask ourselves if the number `1` is in the first or second half. We know that it's not in the second half. So we can ignore the second half. It may not seem like eliminating half the array is a big deal here, but as the array gets bigger, it becomes a big deal.

Now, we divide the remaining half in half again. We ask ourselves if the number `1` is in the first or second half. We know that it's not in the second half. So we can ignore the second half. We keep doing this until we find the number `1`.

This is a technique called **divide and conquer**.

We count the number of steps/times we have to divide the array in half, which were 3 steps.
Remember, we have 8 items in the array, so we can represent this as 2^3 = 8. In a logarithm, we can say that log base 2 of 8 is 3. So we can say that the time complexity is O(log n).

In simpler words, how many times do we have to divide the array in half until we get to the number we are looking for?

Let's say we have 1,000,000 items in the array. Compared to the O(n) time complexity, which would take 1,000,000 steps, the O(log n) time complexity would only take 20 steps. This is a huge difference.

A quick look at O(n \* log n) time complexity:

O(n \* log n) is a combination of O(n) and O(log n). This is often seen in sorting algorithms like merge sort and quicksort.

This is the most efficient time complexity that we can get for sorting algorithms if we are not sorting numbers.

We will see this in the sorting algorithms section.

# Big-O: Different Terms for Inputs

Different terms for inputs is a very popular question in interviews. This is when we have two inputs and we want to know how to represent the time complexity.

```js
function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i)
  }

  for (let j = 0; j < b; j++) {
    console.log(j)
  }
}
```

With what we know so far, we would say that the time complexity is O(n). But, this is not the case. We have two different inputs. `a` and `b` which might be different. We can't just say O(n). We can't say that `a` is equal to `n` and that `b` is equal to `n`. What if `a` is 1,000 and `b` is 1? We can't say that `a` is equal to `n` and that `b` is equal to `n`. We have to represent the time complexity for both inputs.

The first loop runs `a` times and the second loop runs `b` times. So we would say that the time complexity is O(a + b).

Similarly, if we have two nested loops, we would say that the time complexity is O(a \* b).

```js
function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i, j)
    }
  }
}
```

This function has a time complexity of O(a \* b). This is because the first loop runs `a` times and the second loop runs `b` times. So we would say that the time complexity is O(a \* b).

## Big-O: Arrays

`myArray` is an array of numbers.

|           |     |     |     |     |
| --------- | --- | --- | --- | --- |
| **Value** | 11  | 3   | 23  | 7   |
| **Index** | 0   | 1   | 2   | 3   |

We want to `push` a number to the end of the array.

```js
myArray.push(17)
```

|           |     |     |     |     |     |
| --------- | --- | --- | --- | --- | --- |
| **Value** | 11  | 3   | 23  | 7   | 17  |
| **Index** | 0   | 1   | 2   | 3   | 4   |

When pushing to the end of the array, we are not re-indexing the array. We are just adding to the end of the array.

What if we `pop` a number from the end of the array?

```js
myArray.pop()
```

|           |     |     |     |     |
| --------- | --- | --- | --- | --- |
| **Value** | 11  | 3   | 23  | 7   |
| **Index** | 0   | 1   | 2   | 3   |

When popping from the end of the array, we are not re-indexing the array. We are just removing from the end of the array.

Because we are not re-indexing the array when we `push` or `pop`, the time complexity is O(1) for both operations.

What if we want to `shift` a number from the beginning of the array?

```js
myArray.shift()
```

|           |     |     |     |
| --------- | --- | --- | --- |
| **Value** | 3   | 23  | 7   |
| **Index** | 0   | 1   | 2   |

When we shift, the problem we have is that the first item in the array after the shift is still at index 0. We have to re-index the array. This means that we have to loop through the entire array and re-index it.

What if we want to `unshift` a number to the beginning of the array?

```js
myArray.unshift(17)
```

|           |     |     |     |     |
| --------- | --- | --- | --- | --- |
| **Value** | 17  | 3   | 23  | 7   |
| **Index** | 0   | 1   | 2   | 3   |

When we unshift, the problem we have is that the item before the unshift is still at index 0. We have to re-index the array. This means that we have to loop through the entire array and re-index it.

This is not a big deal if we have a small array. But if we have a large array, this can be a big deal.

The time complexity for both `shift` and `unshift` is O(n). This is because we have to loop through the entire array and re-index it.

Now, what if we want to add something to the middle of the array?

```js
myArray.splice(1, 0, 'Hi')
```

- `1` is the index we want to add the item at
- `0` is the number of items we want to remove from the array
- `'Hi'` is the item we want to add to the array

|           |     |      |     |     |     |
| --------- | --- | ---- | --- | --- | --- |
| **Value** | 11  | 'Hi' | 3   | 23  | 7   |
| **Index** | 0   | 1    | 2   | 3   | 4   |

When we splice, the problem we have is that the item before the splice is still at the old index. We have to re-index the array. This means that we have to loop through the entire array and re-index it.

It doesn't matter if we are adding or removing items somewhere from the array. The time complexity is O(n). This is because we have to loop through the entire array and re-index it.

What if we want to find an item in the array?

If we search by value, we have to loop through the entire array. This means that the time complexity is O(n).

If we search by index, we can directly go that place in memory. This means that the time complexity is O(1).

If you need to access things by index, arrays are a great data structure. If you are going to be adding and removing a lot of items, arrays are not a great data structure. Either way, you are making your decisions based on the time complexity.

# Recap

There are different words or phrases that we use to describe the time complexity of an algorithm. Here are some of the most common ones:

- O(n^2): is a loop inside a loop. This is the slowest time complexity. Also called quadratic time complexity.

- O(n): is proportional to the input size. This is a linear time complexity.

- O(log n): is logarithmic time complexity. This is when we are dividing the input size in half. We will hear the term "divide and conquer" a lot. This is the fastest time complexity.

- O(1): is constant time complexity. This is when the number of operations does not change as the input size changes. This is the most efficient time complexity.

[Big-O Cheat Sheet](https://www.bigocheatsheet.com/) is a great resource to have. It has a lot of information about Big-O notation and time complexity. It also has a lot of examples and explanations.
