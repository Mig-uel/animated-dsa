# Recursion

## Recursion: Intro

Recursion is a function that calls itself until it doesn't.

Example:

```js
function openGiftBox() {
  if (isBall) return ball

  openGiftBox()
}
```

- The process of opening each new box is the same. Or the process of whatever you are doing with recursion has to be the same.
- Each time we open a box, we make the problem smaller. Whatever we are doing with recursion, each time you have to function call itself, it has to be operating on a smaller and smaller problem.

When we open the box that has the ball in it, it is called the **Base Case**.
If it is another gift box, it is a recursive case. In this case, we need to have the function call itself again.

Sooner or later the function will reach its base case and stop recursively calling itself.

You always have to have some conditional that at some point is going to be true and causes the function to stop calling itself.
You also have to have a return statement.

## Call Stack

Call stacks is an important subject to understand if you want to wrap your head around recursion.

In a FIFO stack, the first element added to the stack is the first one to be removed.

The call stack is a data structure that keeps track of function calls. It is a stack data structure, which means that the last function called is the first one to be removed from the stack. This is known as LIFO (Last In, First Out).

When a function is called, it is added to the top of the stack. When the function returns, it is removed from the top of the stack. This is how the call stack keeps track of which function is currently executing and what its context is.

## Recursion: Factorial

A factorial is a mathematical operation that multiplies a number by all the numbers below it down to 1.

The factorial of 5 is 5 _ 4 _ 3 _ 2 _ 1 = 120.

```js
function factorial(n) {
  if (n === 1) return 1

  return n * factorial(n - 1)
}
```

- The base case is when n is 1. When n is 1, we return 1.
- The recursive case is when n is greater than 1. In this case, we return n multiplied by the factorial of n - 1.
- The function will keep calling itself until it reaches the base case. At that point, it will start returning values back up the call stack.
- The call stack will look like this:

```
factorial(5) // 5 * factorial(4)
factorial(4) // 4 * factorial(3)
factorial(3) // 3 * factorial(2)
factorial(2) // 2 * factorial(1)
factorial(1) // 1
```
