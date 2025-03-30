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
