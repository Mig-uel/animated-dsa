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
      // if the list is not empty, set the new node's previous pointer to the current tail
      node.prev = this.tail

      // set the current tail's next pointer to the new node
      this.tail.next = node

      // update the tail pointer to point to the new node
      this.tail = node
    }

    // increment the length of the list by 1
    this.length++
  }
}
```

Explanation:

- A new node is created with the given value.
- If the list is empty, the head and tail are set to the new node.
- If the list is not empty, the new node's previous pointer is set to the current tail, and the current tail's next pointer is set to the new node. The tail is then updated to the new node.
- The length of the list is incremented by 1.

## Doubly Linked List: Pop

Unlike a singly linked list, popping a node from a doubly linked list is easier because we have access to the previous node. In a singly linked list, we have to traverse the entire list to find the previous node which would result in O(n) time complexity. In a doubly linked list, we can access the previous node directly from the tail node.

Popping a node from a doubly linked list involves removing the last node from the list and updating the tail pointer to point to the new last node. If the list is empty, we return null.

```js
class DoublyLinkedList {
  pop() {
    // if the list is empty, return undefined
    if (!this.head) return undefined

    // store the current tail node in a variable
    const node = this.tail

    // update the tail pointer to point to the previous node
    this.tail = this.tail.prev

    // if the list has only one node, set head to null
    if (this.length === 1) {
      // if the list has only one node, set head to null
      this.head = null
    } else {
      // if the list has more than one node, set the new tail's next pointer to null
      this.tail.next = null

      // set the popped node's previous pointer to null
      node.prev = null
    }

    // decrement the length of the list by 1
    this.length--

    // return the popped node
    return node
  }
}
```

Explanation:

- If the list is empty, we return undefined.
- We store the current tail node in a variable.
- We update the tail pointer to point to the previous node.
- If the list has only one node, we set the head to null.
- If the list has more than one node, we set the new tail's next pointer to null and the popped node's previous pointer to null.
- We decrement the length of the list by 1 and return the popped node.
- The time complexity of this operation is O(1) because we are only updating pointers and not traversing the list.

## Doubly Linked List: Unshift

Unshifting a node from a doubly linked list involves adding a new node to the beginning of the list. This is similar to pushing a node to the end of the list, but we need to update the head pointer instead of the tail pointer.

```js
class DoublyLinkedList {
  // add a new node to the beginning of the list
  unshift(value) {
    // create a new node with the given value
    const node = new Node(value)

    // if the list is empty
    if (!this.head) {
      // set head and tail to the new node
      this.head = node
      this.tail = node
    } else {
      // if the list is not empty

      // set the new node's next pointer to the current head
      node.next = this.head

      // set the current head's previous pointer to the new node
      this.head.prev = node

      // update the head pointer to point to the new node
      this.head = node
    }

    // increment the length of the list by 1
    this.length++

    return this
  }
}
```

Explanation:

- A new node is created with the given value.
- If the list is empty, the head and tail are set to the new node.
- If the list is not empty, the new node's next pointer is set to the current head, and the current head's previous pointer is set to the new node. The head is then updated to the new node.
- The length of the list is incremented by 1.
- The time complexity of this operation is O(1) because we are only updating pointers and not traversing the list.

## Doubly Linked List: Shift

Shifting a node from a doubly linked list involves removing the first node from the list and updating the head pointer to point to the new first node. If the list is empty, we return null.

```js
class DoublyLinkedList {
  shift() {
    // if the list is empty, return undefined
    if (!this.head) return undefined

    // store the current head node in a variable
    const node = this.head

    // update the head pointer to point to the next node
    this.head = this.head.next

    // if the list has only one node, set tail to null
    if (this.length === 1) {
      this.tail = null
    } else {
      // if the list has more than one node, set the new head's previous pointer to null
      this.head.prev = null

      // set the shifted node's next pointer to null
      node.next = null
    }

    this.length--
    return node
  }
}
```

Explanation:

- If the list is empty, we return undefined.
- We store the current head node in a variable.
- We update the head pointer to point to the next node.
- If the list has only one node, we set the tail to null.
- If the list has more than one node, we set the new head's previous pointer to null and the shifted node's next pointer to null.
- We decrement the length of the list by 1 and return the shifted node.
- The time complexity of this operation is O(1) because we are only updating pointers and not traversing the list.
