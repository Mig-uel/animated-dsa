# Problem Solving Patterns

## 8 Most Important Patterns

1. **Two Pointers**: This pattern is used to solve problems that involve searching for pairs in a sorted array. It helps in reducing the time complexity from O(n^2) to O(n) by using two pointers to traverse the array.

   - Example: Finding a pair of numbers in a sorted array that sum up to a specific target.

2. **Sliding Window**: This pattern is used to solve problems that involve arrays or lists. It helps in finding subarrays or substrings that meet certain criteria.

   - Example: Finding the maximum sum of a subarray of a fixed size.

3. **Breadth-First Search (BFS)**: This pattern is used to solve problems that involve traversing or searching tree or graph data structures. It helps in finding the shortest path in an unweighted graph.

   - Example: Finding the shortest path in a maze.

4. **Depth-First Search (DFS)**: This pattern is used to solve problems that involve traversing or searching tree or graph data structures. It helps in exploring all possible paths in a graph.

   - Example: Finding all possible combinations of a set of numbers.

5. **Backtracking**: This pattern is used to solve problems that involve searching for all possible solutions. It helps in finding all possible combinations or permutations of a set of numbers.

   - Example: Finding all possible subsets of a set of numbers.

6. **Heap**: This pattern is used to solve problems that involve finding the k-th largest or smallest element in an array. It helps in reducing the time complexity from O(n log n) to O(n log k).

   - Example: Finding the k-th largest element in an unsorted array.

7. **Binary Search**: This pattern is used to solve problems that involve searching for an element in a sorted array. It helps in reducing the time complexity from O(n) to O(log n).

   - Example: Finding the index of a target value in a sorted array.

8. **Dynamic Programming**: This pattern is used to solve problems that involve overlapping subproblems and optimal substructure. It helps in reducing the time complexity from exponential to polynomial.

   - Example: Finding the longest common subsequence of two strings.

## 2 Major Categories of LeetCode Problems

1. **Linear Data Structures**: This category includes problems that involve arrays, strings, linked lists, stacks, and queues. The most common patterns in this category are:

   - Two Pointers
   - Sliding Window
   - BFS
   - DFS

2. **Non-Linear Data Structures**: This category includes problems that involve trees and graphs. The most common patterns in this category are:

   - Binary Search
   - Heap
   - Dynamic Programming

## Linear Data Structures Problems

All patterns for linear data structures are build off of the two pointers pattern.

The two pointer pattern is important because it allows you to significantly reduce the time complexity of problems that involve traversing a linear data structure (arrays, strings, linked lists, stacks, queues).

Instead of the brute force O(n^2) approach where you might check every element, two pointers often allow you to solve the problem in O(n) time.

There are two main methods of using the two pointers pattern:

1. Same Direction
2. Opposite Direction

And more:

- Sliding Window

## Same Direction

This technique is ideal for problems where you are processing or scanning the data in a single pass.

A common use case is the "slow and fast pointer" approach for detecting cycles in a linked list or finding the middle of a linked list.

The "slow" pointer moves one step at a time, while the "fast" pointer moves two steps at a time. If there is a cycle, the fast pointer will eventually meet the slow pointer.

## Opposite Direction

This technique is typically used for finding pairs or comparing elements from two different ends of a data structure.

A classic example is finding two numbers in a sorted array that sum up to a specific target value. One pointer starts at the beginning of the array, and the other starts at the end. By adjusting the pointers inward based on the sum, you can quickly zero in on the target without needing to check every possible pair.

## Sliding Window Pattern

The sliding window pattern is an extension of the two pointers pattern. While two pointers involves using two separate pointers to traverse and manipulate a data structure, the sliding window pattern refines this by maintaining a "window" of elements within the two pointers, dynamically adjusting its size as we progress through the structure.

This pattern is particularly useful for problems that involve finding subarrays or substrings that meet certain criteria, such as maximum or minimum sums, longest lengths, or specific character counts.

In the sliding window approach, one pointer marks the start of the window, while the other pointer marks the end. As the end pointer advances, the window expands.

Depending on the problem, you either expand the window by moving the end pointer or contract it by moving the start pointer to meet certain criteria, like maximizing the length of a substring or maintaining a sum within a target value.

For example, in a problem where you need to find the longest substring without repeating characters, the window expands by moving the end pointer to include new characters. If the window encounters a repeating character, the start pointer moves forward to shrink the window until all characters are unique again. This dynamic process allows you to efficiently solve problems that require analyzing contiguous segments of an array or string without re-traversing the entire structure multiple times. This approach is often combined with hash maps or sets to keep track of the elements within the window, allowing for quick lookups and updates as the pointers move.

## Binary Search Pattern

Binary search is a classic algorithm used to find the position of a target value within a sorted array by repeatedly dividing the search interval in half.

It is also an expansion of the two pointers pattern, because it uses a left and right pointer that halves the list step by step.

Binary search starts by looking at the middle element of the array and checking if thats the target, if it is, we return it.
If it is smaller than the target, you know that the target is somewhere to the right
