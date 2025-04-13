# Hash Tables

## Hash Tables: Introduction

A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

A hash table is an efficient way to store and retrieve data. It allows for fast insertion, deletion, and lookup of values based on their keys. The average time complexity for these operations is O(1), but in the worst case, it can be O(n) if there are many collisions.

In JavaScript, there is actually a built-in hash table implementation called `Object`. However, it is not a true hash table because it does not allow for non-string keys. We will implement our own hash table using an array and a hash function to demonstrate how it works.

There are two characteristics of a hash table that are important to understand:

1. **Hash Function**: A hash function can only be used going one way. It takes an input (or 'key') and returns a fixed-size string of bytes. What you cannot do is take the hash and get back the original input. This is called a one-way function. A hash function is not reversible, meaning that you cannot derive the original input from the hash output.
2. **Deterministic**: A hash function is deterministic, meaning that the same input will always produce the same output. This is important because it allows us to use the hash value as an index in our hash table.

What can happen in hash tables is that collisions may occur, where two different keys hash to the same index. This can lead to performance issues if not handled properly.

We don't want to overwrite the value already associated with a key. What we want to do is to store both values in the same index.

There are multiple ways to handle collisions, and we will discuss it in the next section.