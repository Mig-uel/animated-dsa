# Linked Lists

To start off, we will compare linked lists with the most often compared to data structure, arrays.

**Array**:

|       |     |     |     |     |
| ----- | --- | --- | --- | --- |
| Value | 11  | 3   | 23  | 7   |
| Index | 0   | 1   | 2   | 3   |

- Arrays have indexes, which means that each element in the array can be accessed using its index. For example, to access the first element in the array, we can use `array[0]`.
- Arrays are stored in contiguous memory locations, which means that the elements are stored next to each other in memory.

**Linked List**:

- Linked lists do not have indexes, which means that each element in the linked list cannot be accessed using its index.
- Linked lists are not store in contiguous memory locations, which means that the elements are not stored next to each other in memory.
- Linked lists have a variable `head` pointer, which points to the first element in the linked list.
- Linked lists have a variable `tail` pointer, which points to the last element in the linked list.
- Each item in the linked list is called a node and each point to the next node in the linked list. The last node in the linked list points to `null`, which indicates the end of the linked list.
- We will hear the phrase "null terminated" list, which means that the last node in the linked list points to `null`.

Again, arrays are in contiguous memory locations, which means that the elements are stored next to each other in memory. In contrast, linked lists are not stored in contiguous memory locations, which means that the elements are not stored next to each other in memory. This means that linked lists can grow and shrink in size dynamically, while arrays have a fixed size. This is one of the main advantages of linked lists over arrays.
