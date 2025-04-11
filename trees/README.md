# Trees

## Trees: Intro & Terminology

A tree is a data structure that consists of nodes connected by edges. It is a hierarchical structure with a single root node at the top and child nodes branching out from it. Each node can have zero or more child nodes, and each child node can have its own children, forming a tree-like structure.

We have already seen trees in the form of a linked list, where each node has a pointer to its next node. In a tree, each node can have multiple children, and the relationships between nodes are more complex.

In a linked list, we had:

```mermaid
graph TD
    A[Node] --> B[Node]
    B --> C[Node]
    C --> D[Node]
```

In a tree, we have:

```mermaid
graph TD
    A[Node] --> B[Node]
    A --> C[Node]
    B --> D[Node]
    B --> E[Node]
    C --> F[Node]
    C --> G[Node]
```

In code, we can represent a tree using a class for the nodes and a class for the tree itself. Each node will have a value and a list of child nodes. The tree class will have a reference to the root node and methods for adding, removing, and searching for nodes.

```js
{
  value: 4,
  left: null,
  right: null
}
```

A more complex tree might look like this:

```js
{
  value: 4,

  left: {
    value: 3,
    left: null,
    right: null
  },
  right: {
    value: 23,
    left: null,
    right: null
  }
}
```

In this example, the root node has a value of 4, and it has two children: a left child with a value of 3 and a right child with a value of 23. Each child node can also have its own children, forming a tree structure.

We usually deal with binary trees, where each node has at most two children. In a binary tree, we refer to the left child and the right child. In a general tree, we can have any number of children for each node.

There is no rule that a tree has to be binary. However, because we have `left` and `right` properties in our binary tree implementation, we often focus on binary trees for simplicity and efficiency.

A **full binary tree** is a tree in which every node has either 0 or 2 children.

```mermaid
graph TD
    A[Node] --> B[Node]
    A --> C[Node]
    B --> D[Node]
    B --> E[Node]
```

A **non-full binary tree** is a tree in which at least one node has only one child.

```mermaid
graph TD
    A[Node] --> B[Node]
    A --> C[Node]
    B --> D[Node]
    B --> E[Node]
    E --> F[Node]
```

A **complete binary tree** is a tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

```mermaid
graph TD
    A[Node] --> B[Node]
    A --> C[Node]
    B --> D[Node]
    B --> E[Node]
    C --> F[Node]
    C --> G[Node]
    D --> H[Node]
    D --> I[Node]
```

A **perfect binary tree** is a tree in which all internal nodes have two children and all leaves are at the same level.

```mermaid
graph TD
    A[Node] --> B[Node]
    A --> C[Node]
    B --> D[Node]
    B --> E[Node]
    C --> F[Node]
    C --> G[Node]
```

A **balanced binary tree** is a tree in which the height of the left and right subtrees of any node differ by at most one.

```mermaid
graph TD
    A[Node] --> B[Node]
    A --> C[Node]
    B --> D[Node]
    B --> E[Node]
    C --> F[Node]
    C --> G[Node]
    D --> H[Node]
```

The top node in a tree is called the **root** or **parent** node. The nodes below the root are called **children**. The children of a node are called **siblings**. The **children** can also be **parents** of their own children.

A node that does not have any children is called a **leaf** node. Leaf nodes are the endpoints of a tree and do not have any further branches.

## Trees: Binary Search Trees (BST)

A **binary search tree (BST)** is a binary tree in which each node has a value, and the values of the left subtree are less than the value of the parent node, while the values of the right subtree are greater than the value of the parent node. This property allows for efficient searching, insertion, and deletion operations.

Let's say we start of with the **root** node with a value of 47. We want to add the value 76.

If the value that we want to add is greater than the value of the root node, we go to the right. If it is less than the value of the root node, we go to the left.

In our case, 76 is greater than 47, so we go to the right.

Now, we want to add the value 52. 52 is greater than 47, so we go to the right. Since we already have a node with the value of 76, we need to check if 52 is less than or greater than 76. Remember, we are looking for the right place to add the new node and if a value is greater than the value of the parent node, we go to the right. If it is less than the value of the parent node, we go to the left.

In our case, 52 is less than 76, so we go to the left. Since there is no node there, we can add the value of 52.

Now, we want to add the value of 21. 21 is less than 47, so we go to the left. Since there is no node there, we can add the value of 21.

Our tree now looks like this:

```plaintext
        47
       /  \
      21   76
          /
         52
```

We want to add the value of 82. 82 is greater than 47, so we go to the right. 82 is also greater than 76, so we go to the right again. Since there is no node there, we can add the value of 82.

```plaintext
        47
       /  \
      21   76
          / \
         52  82
```

Now, we want to add the value of 18. 18 is less than 47, so we go to the left. 18 is also less than 21, so we go to the left again. Since there is no node there, we can add the value of 18.

```plaintext
        47
       /  \
      21   76
     /    / \
    18   52  82
```

Finally, we add the value of 27. 27 is less than 47, so we go to the left. 27 is greater than 21, so we go to the right. Since there is no node there, we can add the value of 27.

```plaintext
        47
       /  \
      21   76
     / \   / \
    18 27 52 82
```

One thing to point out, all of the items greater than the root node (47) are on the right side of the tree and all of the items less than the root node (47) are on the left side of the tree. This is a property of binary search trees.
