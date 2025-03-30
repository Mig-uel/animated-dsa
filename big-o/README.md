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
