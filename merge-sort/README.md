# Merge Sort

## Merge Sort: Overview

Merge Sort is a divide-and-conquer algorithm that sorts an array by recursively dividing it into two halves, sorting each half, and then merging the sorted halves back together. It is known for its efficiency and stability, making it a popular choice for sorting large datasets.

It has a time complexity of O(n log n) in the average and worst cases, making it suitable for large datasets. Merge Sort is also stable, meaning that it preserves the relative order of equal elements in the sorted output.

It is particularly useful for sorting linked lists and external sorting, where data is too large to fit into memory.

Merge sort is our first sorting algorithm that uses recursion and it leverages the idea that if you have two sorted lists, you can merge them fairly easily.

**Quick Overview:**

What merge sort does is it will take a list and cut it in half, again and again until we have a single item array. By definition, a single item array is sorted.

Then, we will merge those arrays back together in a sorted manner. So, we will take two sorted arrays and merge them into one sorted array.
