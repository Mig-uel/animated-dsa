# Doubly Linked Lists

A double linked list is a data structure that consists of nodes, where each node contains a value and pointers to both the next and previous nodes in the sequence unlike a singly linked list which only has a pointer to the next node. This allows for traversal in both directions (forward and backward).

# Doubly Linked List: Constructor

```js
// node class
class Node {
  constructor(value) {
    this.value = value
    this.next = null // pointer to the next node
    this.prev = null // pointer to the previous node
  }
}
```

```js
// doubly linked list class
class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value)

    this.head = node // pointer to the first node
    this.tail = node // pointer to the last node
    this.length = 1 // initialize length of the list
  }
}
```

```js
// instance of the doubly linked list
const doublyList = new DoublyLinkedList(10)

console.log(doublyList) // { head: Node, tail: Node, length: 1 }
```

# Doubly Linked List: Push

```js
class DoublyLinkedList {
  push(value) {
    // create a new node with the given value
    const node = new Node(value)

    if (!this.head) {
      // if the list is empty, set head and tail to the new node
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }

    this.length++
  }
}
```

Explanation:

- A new node is created with the given value.
- If the list is empty, the head and tail are set to the new node.
- If the list is not empty, the new node's previous pointer is set to the current tail, and the current tail's next pointer is set to the new node. The tail is then updated to the new node.
- The length of the list is incremented by 1.
