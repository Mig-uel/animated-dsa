# Stacks and Queues

## Stack: Introduction

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. Stacks are often compared to a stack of plates, where you can only add or remove the top plate.

A very common of implementing a stack is using an array. In this case, the stack has a fixed size and can only hold a certain number of elements. When the stack is full, you cannot add more elements until you remove some.

We can also implement a stack using a linked list. In this case, the stack can grow and shrink dynamically as elements are added or removed. This is often the preferred method of implementing a stack, as it allows for more flexibility.

Stacks are used in many applications, such as:

- Function calls: When a function is called, the current state of the program is saved on a stack. When the function returns, the state is restored from the stack.
- Undo/Redo: Many applications use a stack to keep track of changes. When you undo an action, the last change is removed from the stack and reapplied. When you redo an action, the last change is added back to the stack.
- Expression evaluation: Stacks are often used to evaluate expressions, such as in calculators. The expression is converted to a postfix notation, and the stack is used to evaluate the result.
- Backtracking: Stacks are used in algorithms that require backtracking, such as depth-first search. The current state is saved on the stack, and when a dead end is reached, the state is restored from the stack to try a different path.
- Memory management: Stacks are used in memory management to keep track of memory allocation and deallocation. When a function is called, memory is allocated on the stack. When the function returns, the memory is deallocated from the stack.

Remember, removing an element from the end of a linked list is O(n) because you have to traverse the entire list to find the last element. And, to add it back in, the time complexity is O(1) if you maintain a pointer to the last element.

For a linked list, it is better to use the head of the list as the top of the stack. This way, you can add and remove elements in O(1) time. The only downside is that you have to traverse the entire list to find the last element, which is O(n).

In a linked list, we had `head` and `tail` pointers. The `head` pointer points to the first element of the list, and the `tail` pointer points to the last element of the list. In a stack, we have a `top` pointer that points to the last element added to the stack and a `bottom` pointer that points to the first element added to the stack. The `top` pointer is used to add and remove elements from the stack, while the `bottom` pointer is used to keep track of the first element added to the stack. We actually don't even need the `bottom` pointer.

## Stack: Constructor

Our `Node` class and the `Stack` class will be identical to the `LinkedList` class. The only difference is that we will not have a `tail` pointer in the `Stack` class. We will also have a `top` pointer that points to the last element added to the stack.

```js
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
```

```js
class Stack {
  constructor(value) {
    // create a new node with the given value
    const node = new Node(value)

    // set the top of the stack to the new node
    this.top = node
    // we are not using a bottom pointer in the stack, so we don't need to set it
    // this.bottom = null

    // set the length of the stack to 1
    this.length = 1
  }
}
```

## Stack: Push

The `push` method adds a new element to the top of the stack. We will create a new node with the given value and set the `next` pointer of the new node to the current top of the stack. Then, we will set the `top` pointer of the stack to the new node and increment the length of the stack by 1.

```js
class Stack {
  push(value) {
    // create a new node with the given value
    const node = new Node(value)

    if (!this.top) {
      // if the stack is empty, set the top of the stack to the new node
      this.top = node
    } else {
      // if the stack is not empty, set the next pointer of the new node to the current top of the stack
      node.next = this.top

      // set the top of the stack to the new node
      this.top = node
    }

    // increment the length of the stack by 1
    this.length++

    return this
  }
}
```

Explanation:

- We create a new node with the given value.
- If the stack is empty, we set the top of the stack to the new node.
- If the stack is not empty, we set the next pointer of the new node to the current top of the stack and set the top of the stack to the new node.
- We increment the length of the stack by 1.
- We return the stack object to allow for method chaining.
