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

# Doubly Linked List: Get

Getting a node from a doubly linked list involves traversing the list to find the node at the given index. If the index is out of bounds, we return null.

```js
class DoublyLinkedList {
  get(index) {
    // if the index is out of bounds, return undefined
    if (index < 0 || index >= this.length) return undefined

    // if the index is 0, return the head node
    if (index === 0) return this.head

    // if the index is the last index, return the tail node
    if (index === this.length - 1) return this.tail

    // initialize a variable to store the current node
    let temp

    if (index < this.length / 2) {
      // if the index is in the first half of the list, start from the head
      temp = this.head

      // traverse the list to find the node at the given index
      // by moving to the next node until we reach the index
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
    } else {
      // if the index is in the second half of the list, start from the tail
      temp = this.tail

      // traverse the list to find the node at the given index
      // by moving to the previous node until we reach the index
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev
      }
    }

    // return the node at the given index
    return temp
  }
}
```

Explanation:

- If the index is out of bounds, we return undefined.
- If the index is 0, we return the head node. If the index is the last index, we return the tail node.
- We initialize a variable to store the current node.
- If the index is in the first half of the list, we start from the head and traverse the list to find the node at the given index by moving to the next node until we reach the index.
- If the index is in the second half of the list, we start from the tail and traverse the list to find the node at the given index by moving to the previous node until we reach the index.
- Finally, we return the node at the given index.
- The time complexity of this operation is O(n) because we may have to traverse the entire list in the worst case.

## Doubly Linked List: Set

Setting a node in a doubly linked list involves updating the value of the node at the given index. If the index is out of bounds, we return false.

```js
class DoublyLinkedList {
  set(index, value) {
    // get the node at the given index
    const node = this.get(index)

    // if the index is out of bounds, return false
    if (!node) return false

    // update the value of the node at the given index
    node.value = value

    // return true
    return true
  }
}
```

Explanation:

- We get the node at the given index using the get method.
- If the index is out of bounds, we return false.
- We update the value of the node at the given index.
- Finally, we return true.
- The time complexity of this operation is O(n) because we may have to traverse the entire list in the worst case.
- The space complexity is O(1) because we are only updating the value of the node and not creating any new nodes.

### Doubly Linked List: Insert

Inserting a node in a doubly linked list involves adding a new node at the given index. If the index is out of bounds, we return false.

```js
class DoublyLinkedList {
  insert(index, value) {
    // if the index is out of bounds, return false
    if (index < 0 || index > this.length) return false

    if (index === 0) {
      // if the index is 0, unshift the new node
      this.unshift(value)
      return true
    } else if (index === this.length) {
      // if the index is the last index, push the new node
      this.push(value)
      return true
    }

    // if the index is in the middle of the list, create a new node
    const node = new Node(value)

    // get the previous node at the given index - 1
    const prevNode = this.get(index - 1)

    // get the next node by accessing the next pointer of the previous node
    const nextNode = prevNode.next

    // set the previous node's next pointer to the new node
    prevNode.next = node

    // set the new node's previous pointer to the previous next node
    node.next = nextNode

    // set the new node's previous pointer to the previous node
    node.prev = prevNode

    // set the next node's previous pointer to the new node
    nextNode.prev = node

    this.length++
    return true
  }
}
```

Explanation:

- If the index is out of bounds, we return false.
- If the index is 0, we unshift the new node and return true.
- If the index is the last index, we push the new node and return true.
- If the index is in the middle of the list, we create a new node with the given value.
- We get the previous node at the given index - 1 using the get method.
- We get the next node by accessing the next pointer of the previous node.
- We set the previous node's next pointer to the new node.
- We set the new node's previous pointer to the previous next node.
- We set the new node's previous pointer to the previous node.
- We set the next node's previous pointer to the new node.
- We increment the length of the list by 1 and return true.
- The time complexity of this operation is O(n) because we may have to traverse the entire list in the worst case.
- The space complexity is O(1) because we are only updating pointers and not creating any new nodes.

## Doubly Linked List: Remove

Removing a node from a doubly linked list involves removing the node at the given index. If the index is out of bounds, we return undefined.

```js
class DoublyLinkedList {
  remove(index) {
    // if the index is out of bounds, return undefined
    if (index < 0 || index >= this.length) return undefined

    // if the index is 0, shift the first node
    if (index === 0) return this.shift()
    // if the index is the last index, pop the last node
    else if (index === this.length - 1) return this.pop()

    // if the index is in the middle of the list, get the node at the given index
    const node = this.get(index)
    // get the previous node by accessing the previous pointer of the current node
    const prev = node.prev
    // get the next node by accessing the next pointer of the current node
    const next = node.next

    // set the previous node's next pointer to the next node
    prev.next = next
    // set the next node's previous pointer to the previous node
    next.prev = prev

    // clear the references of the removed node
    node.prev = null
    node.next = null

    // decrement the length of the list by 1
    this.length--
    return node
  }
}
```

Explanation:

- If the index is out of bounds, we return undefined.
- If the index is 0, we shift the first node and return it.
- If the index is the last index, we pop the last node and return it.
- If the index is in the middle of the list, we get the node at the given index using the get method.
- We get the previous node by accessing the previous pointer of the current node.
- We get the next node by accessing the next pointer of the current node.
- We set the previous node's next pointer to the next node.
- We set the next node's previous pointer to the previous node.
- We clear the references of the removed node by setting its previous and next pointers to null.
- We decrement the length of the list by 1 and return the removed node.
- The time complexity of this operation is O(n) because we may have to traverse the entire list in the worst case.
- The space complexity is O(1) because we are only updating pointers and not creating any new nodes.

**TODO: Add more methods to the doubly linked list class such as reverse, print, etc.**
