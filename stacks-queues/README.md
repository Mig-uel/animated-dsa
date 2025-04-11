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

## Stack: Pop

The `pop` method removes the top element from the stack. We will set the `top` pointer of the stack to the next node in the stack and decrement the length of the stack by 1. If the stack is empty, we will return `undefined`.

```js
class Stack {
  pop() {
    // if the stack is empty, return undefined
    if (!this.top) return undefined

    // store the current top of the stack in a variable
    const node = this.top

    // set the top of the stack to the next node in the stack
    this.top = this.top.next

    // set the next pointer of the popped node to null
    node.next = null

    // decrement the length of the stack by 1
    this.length--

    return node
  }
}
```

Explanation:

- We check if the stack is empty. If it is, we return `undefined`.
- We store the current top of the stack in a variable.
- We set the top of the stack to the next node in the stack.
- We set the next pointer of the popped node to `null` to remove the reference to the next node.
- We decrement the length of the stack by 1.
- We return the popped node to allow for further processing if needed.

## Queue: Introduction

A queue is a linear data structure that follows the First In First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. Queues are often compared to a line of people waiting to enter a store, where the first person in line is the first one to enter the store.

Queues are used in many applications, such as:

- Print spooling: When a print job is sent to a printer, it is added to a queue. The printer processes the jobs in the order they were received.
- Task scheduling: Many operating systems use a queue to manage tasks. The tasks are added to the queue in the order they are received, and the operating system processes them in that order.
- Breadth-first search: Queues are used in algorithms that require breadth-first search. The current state is saved in a queue, and when a dead end is reached, the state is restored from the queue to try a different path.
- Network packet management: Queues are used in network packet management to keep track of packets that need to be sent or received. The packets are added to the queue in the order they are received, and the network device processes them in that order.
- Memory management: Queues are used in memory management to keep track of memory allocation and deallocation. When a function is called, memory is allocated on the queue. When the function returns, the memory is deallocated from the queue.
- Event handling: Many applications use a queue to manage events. The events are added to the queue in the order they are received, and the application processes them in that order.

For a queue, we have a `front` pointer that points to the first element added to the queue and a `back` pointer that points to the last element added to the queue. The `front` pointer is used to add and remove elements from the queue, while the `back` pointer is used to keep track of the last element added to the queue. We actually don't even need the `back` pointer.

## Queue: Constructor

As with the stack, our `Node` class and the `Queue` class will be identical to the `LinkedList` class. The only difference is that we will not have a `tail` pointer in the `Queue` class. We will also have a `front` pointer that points to the first element added to the queue.

```js
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
```

```js
class Queue {
  constructor(value) {
    // create a new node with the given value
    const node = new Node(value)

    // set the first of the queue to the new node
    this.first = node

    // set the last of the queue to the new node
    this.last = node

    // set the length of the queue to 1
    this.length = 1
  }
}
```

## Queue: Enqueue

The `enqueue` method adds a new element to the back of the queue. We will create a new node with the given value and set the `next` pointer of the current last node to the new node. Then, we will set the `last` pointer of the queue to the new node and increment the length of the queue by 1.

```js
class Queue {
  enqueue(value) {
    // create a new node with the given value
    const node = new Node(value)

    if (!this.first) {
      // if the queue is empty, set the first of the queue to the new node
      this.first = node

      // set the last of the queue to the new node
      this.last = node
    } else {
      // if the queue is not empty, set the next pointer of the current last node to the new node
      this.last.next = node

      // set the last of the queue to the new node
      this.last = node
    }

    // increment the length of the queue by 1
    this.length++
    return this
  }
}
```

Explanation:

- We create a new node with the given value.
- If the queue is empty, we set the first of the queue to the new node and set the last of the queue to the new node.
- If the queue is not empty, we set the next pointer of the current last node to the new node and set the last of the queue to the new node.
- We increment the length of the queue by 1.
- We return the queue object to allow for method chaining.

## Queue: Dequeue

The `dequeue` method removes the first element from the queue. We will set the `first` pointer of the queue to the next node in the queue and decrement the length of the queue by 1. If the queue is empty, we will return `undefined`.

```js
class Queue {
  dequeue() {
    // if the queue is empty, return undefined
    if (!this.first) return undefined

    // store the current first of the queue in a variable
    const node = this.first

    // set the first of the queue to the next node in the queue
    this.first = this.first.next

    // if the queue is now empty, set the last of the queue to null
    if (this.length === 1) this.last = this.first

    // subtract 1 from the length of the queue
    this.length--

    // set the next pointer of the dequeued node to null
    node.next = null

    return node
  }
}
```

Explanation:

- We check if the queue is empty. If it is, we return `undefined`.
- We store the current first of the queue in a variable.
- We set the first of the queue to the next node in the queue.
- If the queue is now empty, we set the last of the queue to null.
- We decrement the length of the queue by 1.
- We set the next pointer of the dequeued node to `null` to remove the reference to the next node.
- We return the dequeued node to allow for further processing if needed.

## Stack: Reverse a String

A common interview question is to reverse a string using a stack. This is a great way to test your understanding of stacks and how they work.
The idea is to push each character of the string onto the stack and then pop each character off the stack to create the reversed string.

```js
function reverseString(string) {
  // create a new stack
  const stack = new Stack()

  // push each character of the string onto the stack
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i])
  }

  // create a new string to hold the reversed string
  let reversedString = ''

  // pop each character off the stack and add it to the reversed string
  while (stack.length > 0) {
    reversedString += stack.pop().value
  }

  return reversedString
}
```

Explanation:

- We create a new stack.
- We push each character of the string onto the stack using a for loop.
- We create a new string to hold the reversed string.
- We pop each character off the stack and add it to the reversed string using a while loop.
- We return the reversed string.

## Stack: Parentheses Matching

A common interview question is to check if a string of parentheses is valid. This means that each opening parenthesis has a matching closing parenthesis and that the parentheses are properly nested.

```ts
function isMatching(input: string) {
  // check if the input is empty
  if (!input.length) return true

  // create a new stack
  const stack = new Stack()

  // loop through each character of the input string
  for (let i = 0; i < input.length; i++) {
    // get the current character
    const char = input[i]

    // check if the character is an opening parenthesis
    if (char === '(') stack.push(char)
    else {
      // if the character is a closing parenthesis, check if the stack is empty
      // if the stack is empty, return false
      if (stack.isEmpty()) return false

      // if the stack is not empty, pop the top element off the stack
      stack.pop()
    }
  }

  // check if the stack is empty
  // if the stack is empty, return true
  return stack.isEmpty()
}
```

Explanation:

- We check if the input is empty. If it is, we return true.
- We create a new stack.
- We loop through each character of the input string using a for loop.
- We check if the character is an opening parenthesis. If it is, we push it onto the stack.
- If the character is a closing parenthesis, we check if the stack is empty. If it is, we return false.
- If the stack is not empty, we pop the top element off the stack.
- We check if the stack is empty. If it is, we return true.
- If the stack is not empty, we return false.

## Stack: Sort Stack

A common interview question is to sort a stack using another stack. This means that we need to sort the elements in the stack in ascending order using only another stack.

```ts
function sortStack(stack) {
  // check if the stack is empty
  if (stack.isEmpty()) return undefined

  // check if the stack has only one element
  if (stack.size() === 1) return stack

  // create a new stack to hold the sorted elements
  const temp = new Stack()

  // loop through each element of the stack
  while (!stack.isEmpty()) {
    // pop the top element off the stack
    // and store it in a variable
    const popped = stack.pop()

    // check if the temp stack is empty or if the popped element is less than or equal to the top element of the temp stack
    while (!temp.isEmpty() && temp.peek() > popped) {
      // if it is, pop the top element off the temp stack and push it onto the original stack
      // this will ensure that the elements in the temp stack are sorted in ascending order
      stack.push(temp.pop())
    }

    // push the popped element onto the temp stack
    temp.push(popped)
  }

  // loop through each element of the temp stack
  while (!temp.isEmpty()) {
    // pop the top element off the temp stack and push it onto the original stack
    stack.push(temp.pop())
  }

  return stack
}
```

Explanation:

- We check if the stack is empty. If it is, we return `undefined`.
- We check if the stack has only one element. If it does, we return the stack.
- We create a new stack to hold the sorted elements.
- We loop through each element of the stack using a while loop.
- We pop the top element off the stack and store it in a variable.
- We check if the temp stack is empty or if the popped element is less than or equal to the top element of the temp stack. If it is, we pop the top element off the temp stack and push it onto the original stack. This will ensure that the elements in the temp stack are sorted in ascending order.
- We push the popped element onto the temp stack.
- We loop through each element of the temp stack using a while loop.
- We pop the top element off the temp stack and push it onto the original stack.
- We return the original stack.
