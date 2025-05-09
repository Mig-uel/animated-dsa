class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value)

    this.head = node
    this.tail = node
    this.length = 1
  }

  push(value) {
    const node = new Node(value)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
  }
}

function addTwoNumbers(l1, l2) {
  let num1 = ''
  let num2 = ''

  let current = l1
  while (current !== null) {
    num1 += current.val
    current = current.next
  }

  current = l2
  while (current !== null) {
    num2 += current.val
    current = current.next
  }

  num1 = num1.split('').reverse().join('')
  num2 = num2.split('').reverse().join('')

  let sum = (BigInt(num1) + BigInt(num2)).toString().split('').reverse()

  // Create the head of the result linked list
  const head = new ListNode(Number(sum[0]))
  let node = head

  // Traverse through the sum array and create the rest of the nodes
  for (let i = 1; i < sum.length; i++) {
    node.next = new ListNode(Number(sum[i])) // Properly link next nodes
    node = node.next // Move to the new node
  }

  return head
}

const l1 = new LinkedList(2)
l1.push(4)
l1.push(3)

const l2 = new LinkedList(5)
l2.push(6)
l2.push(4)

console.log(addTwoNumbers(l1, l2))
