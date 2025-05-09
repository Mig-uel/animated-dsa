# Recursion

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
