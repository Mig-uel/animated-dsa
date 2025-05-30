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

## Hash Tables: Collisions

A collision occurs when two different keys hash to the same index in a hash table. There are several ways to handle collisions, but here are the most common ways:

- **Chaining**: In this method, each index in the hash table contains a linked list of all the keys that hash to that index. When a collision occurs, the new key-value pair is simply added to the linked list at that index. This method is simple and effective, but it can lead to long linked lists if there are many collisions.
- **Open Addressing**: In this method, when a collision occurs, the hash table looks for the next available index in the array to store the new key-value pair. This method can be more efficient than chaining, but it can lead to clustering, where many keys are stored in a small number of indices.
- **Double Hashing**: This is a more advanced method of open addressing that uses a second hash function to find the next available index. This can help to reduce clustering and improve performance.
- **Cuckoo Hashing**: This method uses two hash functions and two hash tables. When a collision occurs, the existing key is moved to its alternate location in the second hash table. This can lead to more complex implementations but can also improve performance.
- **Robin Hood Hashing**: This method uses a combination of open addressing and chaining. When a collision occurs, the new key-value pair is added to the linked list at that index, but the existing key is moved to the next available index. This can help to reduce clustering and improve performance.
- **Separate Chaining**: This method uses a combination of chaining and open addressing. When a collision occurs, the new key-value pair is added to the linked list at that index, but the existing key is moved to the next available index. This can help to reduce clustering and improve performance.
- **Linear Probing**: This method uses a linear search to find the next available index in the array. This can help to reduce clustering and improve performance, but it can also lead to long search times if there are many collisions.

We will be implementing the separate chaining method to handle collisions in our hash table.
This method is simple and effective, and it allows us to store multiple key-value pairs at the same index in the hash table.

## Hash Tables: Constructor

You get a more randomized distribution of keys in the hash table by using a prime number as the size of the hash table. This is because prime numbers are less likely to have common factors with the keys, which helps to reduce collisions.

So, we will use a the prime number 7 as the size of our hash table. This will help to ensure that our hash table is efficient and has a good distribution of keys.

```js
class HashTable {
  // constructor accepts a size parameter that defaults to 7
  // this is the size of the hash table
  constructor(size = 7) {
    // create an array of the specified size
    this.dataMap = new Array(size).fill(null) // initialize the array with null values
  }

  // _hash method takes a key as a parameter and returns the index in the hash table where the key-value pair should be stored
  _hash(key) {
    // initialize a variable to store the hash value
    let hash = 0

    // loop through each character in the key and calculate the hash value
    for (let i = 0; i < key.length; i++) {
      // use the charCodeAt method to get the ASCII value of the character
      // multiply it by 23 (a prime number) and add it to the hash value
      // use the modulo operator to ensure that the hash value is within the bounds of the array size
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
    }

    // return the hash value
    // this is the index in the hash table where the key-value pair should be stored
    return hash
  }
}
```

Explanation:

- The constructor accepts a size parameter that defaults to 7. This is the size of the hash table.
- The constructor creates an array of the specified size and initializes it with null values. This is where the key-value pairs will be stored.
- The `_hash` method takes a key as a parameter and returns the index in the hash table where the key-value pair should be stored. It does this by looping through each character in the key, calculating the hash value using the `charCodeAt` method, and using the modulo operator to ensure that the hash value is within the bounds of the array size.
- The hash value is calculated by multiplying the ASCII value of each character by 23 (a prime number) and adding it to the hash value. This helps to ensure that the hash value is distributed evenly across the array.
- The `_hash` method returns the hash value, which is the index in the hash table where the key-value pair should be stored.
- The hash table is implemented as a class, which allows us to create multiple instances of the hash table with different sizes if needed.
- The hash table is initialized with a size of 7, which is a prime number. This helps to ensure that the hash table is efficient and has a good distribution of keys.

## Hash Tables: Set Method

The `set` method is used to add a key-value pair to the hash table. It takes two parameters: the key and the value. The method first calculates the index in the hash table where the key-value pair should be stored using the `_hash` method. If there is no linked list at that index, it creates one and adds the key-value pair to it. If there is already a linked list at that index, it checks if the key already exists in the list. If it does, it updates the value. If it doesn't, it adds the new key-value pair to the end of the list.

Let's say we want to `set` an item with key of `bolts` and value of `1400`.
The `set` method should produce a hash/index and an array with the key and value pair. It would then set it at the hash/index it produced.

```js
// set method takes a key and a value as parameters
set(key, value) {
  // calculate the index in the hash table where the key-value pair should be stored
  const index = this._hash(key)

  // check if there is no data at that index
  if (!this.dataMap[index]) {
    // if there is no data, create an empty array at that index
    this.dataMap[index] = []
  }

  // push the key-value pair into the array at that index
  // this allows us to store multiple key-value pairs at the same index in the hash table
  this.dataMap[index].push([key, value])

  // return the hash table instance
  return this
}
```

Explanation:

- The `set` method takes a key and a value as parameters.
- It calculates the index in the hash table where the key-value pair should be stored using the `_hash` method.
- It checks if there is no data at that index. If there is no data, it creates an empty array at that index.
- It pushes the key-value pair into the array at that index. This allows us to store multiple key-value pairs at the same index in the hash table.
- It returns the hash table instance, allowing for method chaining.

## Hash Tables: Get Method

The `get` method is used to retrieve the value associated with a given key in the hash table. It takes one parameter: the key. The method first calculates the index in the hash table where the key-value pair should be stored using the `_hash` method. It then checks if there is a linked list at that index. If there is, it loops through the linked list to find the key and returns the associated value. If the key is not found, it returns `undefined`.

Let's say we want to `get` an item with key of `bolts`.
The `get` method should produce a hash/index and an array with the key and value pair. It would then return the value at the hash/index it produced if it exists. If it doesn't exist, it would return `undefined`.

```js
// get method takes a key as a parameter
get(key) {
  // calculate the index in the hash table where the key-value pair should be stored
  // using the _hash method
  let index = this._hash(key)

  // save the data at that index in a variable
  const data = this.dataMap[index]

  // save the data at that index in a variable
  // check if there is no data at that index
  if (!data) return undefined // if there is no data, return undefined

  // loop through the linked list at that index
  for (let i = 0; i < data.length; i++) {
    // check if the key at that index matches the key we are looking for
    // if it does, return the value at that index
    if (data[i][0] === key) return data[i][1]
  }

  // if the key is not found, return undefined
  // this means that the key does not exist in the hash table
  return undefined
}
```

Explanation:

- The `get` method takes a key as a parameter.
- It calculates the index in the hash table where the key-value pair should be stored using the `_hash` method.
- It checks if there is a linked list at that index. If there is, it loops through the linked list to find the key and returns the associated value. If the key is not found, it returns `undefined`.
- It returns the value associated with the key if it exists, or `undefined` if it does not.

## Hash Tables: Keys Method

The `keys` method is used to retrieve all the keys in the hash table. It loops through the hash table and collects all the keys from each linked list into an array. It then returns the array of keys.

```js
// keys method returns an array of all the keys in the hash table
keys() {
  // create an empty array to store the keys
  let allKeys = []

  // loop through the hash table
  for (let i = 0; i < this.dataMap.length; i++) {
    // check if there is data at that index
    // if there is, loop through the linked list at that index
    if (this.dataMap[i]) {
      // loop through the linked list at that index
      // and push the keys into the allKeys array
      // this allows us to collect all the keys in the hash table
      for (let j = 0; j < this.dataMap[i].length; j++) {
        allKeys.push(this.dataMap[i][j][0])
      }
    }
  }

  // return the array of keys
  // this allows us to retrieve all the keys in the hash table
  return allKeys
}
```

Explanation:

- The `keys` method returns an array of all the keys in the hash table.
- It creates an empty array to store the keys.
- It loops through the hash table and checks if there is data at each index. If there is, it loops through the linked list at that index and pushes the keys into the `allKeys` array.
- It returns the array of keys, allowing us to retrieve all the keys in the hash table.
- The `keys` method is useful for retrieving all the keys in the hash table, which can be helpful for debugging or iterating through the keys.
- It allows us to see all the keys in the hash table without having to loop through each linked list manually.

## Hash Tables: Big-O Notation

The time complexity of the hash table operations is as follows:

`_hash`: O(1) - The hash function takes a key and returns an index in the hash table. This operation is constant time because it does not depend on the size of the hash table.

`set`: O(1) - The set method adds a key-value pair to the hash table. This operation is constant time because it does not depend on the size of the hash table.

`get`: O(1) - The get method retrieves a value associated with a key in the hash table. This operation is constant time on average, assuming a good hash function and a low number of collisions.

`keys`: O(n) - The keys method retrieves all the keys in the hash table. This operation is linear time because it depends on the number of keys in the hash table.

## Hash Tables: Interview Questions

Question 1: Write a function that returns true or false if two arrays have any items in common.

```js
// haveInCommon function takes two arrays as parameters
function haveInCommon(arr1, arr2) {
  // loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    // loop through the second array
    for (let j = 0; j < arr2.length; j++) {
      // check if the item at index i in arr1 is equal to the item at index j in arr2
      if (arr1[i] === arr2[j]) return true // if it is, return true
    }
  }

  // if no items are found in common, return false
  // this means that the two arrays do not have any items in common
  return false
}
```

This solution has a time complexity of O(n^2) because it uses two nested loops to check for common items in the two arrays. This means that the time it takes to run the function increases exponentially with the size of the input arrays.

The solution can be optimized using an object to reduce the time complexity to O(n).

```js
function haveInCommon(arr1, arr2) {
  const obj = {}

  // loop through the first array and store each item in an object
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true // store the item as a key in the object
  }

  // loop through the second array and check if each item exists in the object
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true // if it exists, return true
  }

  // if no items are found in common, return false
  return false
}
```

This solution has a time complexity of O(n) because it uses a single loop to store the items in the first array in an object, and then another loop to check if each item in the second array exists in the object. This means that the time it takes to run the function increases linearly with the size of the input arrays.

Question 2: Find Duplicates

```js
// findDuplicates function takes an array as a parameter
function findDuplicates(arr) {
  const obj = {}
  const duplicates = []

  // loop through the array and store each item in an object
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      duplicates.push(arr[i]) // if the item already exists, push it to duplicates
    } else {
      obj[arr[i]] = true // store the item as a key in the object
    }
  }

  // return the array of duplicates
  return duplicates
}
```

Question 3: Find the first non-repeating character in a string.

```js
firstNonRepeatingCharacter(str) {
  const obj = {}

  // loop through the string and store each character in an object
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++ // if the character already exists, increment its count
    } else {
      obj[str[i]] = 1 // store the character as a key in the object
    }
  }

  // loop through the string again and return the first non-repeating character
  for (let j = 0; j < str.length; j++) {
    if (obj[str[j]] === 1) return str[j] // if the count is 1, return the character
  }

  // if no non-repeating character is found, return null
  return null
}
```

Question 4: Two Sum

```js
function twoSum(nums, target) {
  const map = new Map() // create a new map to store the indices of the numbers

  // loop through the array and store each number in a map
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i] // calculate the complement

    // check if the complement exists in the map
    if (map.has(complement)) {
      return [map.get(complement), i] // if it does, return the indices of the two numbers
    }

    // store the number as a key in the map
    map.set(nums[i], i) // use map.set to store the number and its index
  }

  // if no two numbers add up to the target, return null
  return null
}
```

This solution has a time complexity of O(n) because it uses a single loop to store the numbers in the map and check for complements. This means that the time it takes to run the function increases linearly with the size of the input array.

Question 5: Group Anagrams

```js
function groupAnagrams(strs) {
  const map = new Map() // create a new map to store the anagrams

  // loop through the array of strings
  for (let i = 0; i < strs.length; i++) {
    // sort the string and use it as a key in the map
    const sortedStr = strs[i].split('').sort().join('')

    // check if the sorted string exists in the map
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []) // if it doesn't, create an empty array for it
    }

    // push the original string into the array for that key
    map.get(sortedStr).push(strs[i])
  }

  // return the values of the map as an array of arrays
  return Array.from(map.values())
}
```

This solution has a time complexity of O(n \* k log k) where n is the number of strings and k is the maximum length of a string. This is because we sort each string, which takes O(k log k) time, and we do this for n strings.
