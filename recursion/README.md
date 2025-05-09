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
