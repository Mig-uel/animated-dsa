# Classes and Pointers

A class is like a cookie cutter. It defines the shape of the cookie, but it doesn't actually create any cookies. A class is a blueprint for creating objects. An object is an instance of a class. When you create an object, you are creating a specific instance of the class.

The name of the class by convention starts with a capital letter. Classes always have something that is called a constructor. The constructor is the special method that created new cookies from the class.

```js
class Cookie {
  constructor(color) {
    this.color = color
  }
}
```

This right here is a class called `Cookie`. It has a constructor that takes a color as an argument. The constructor sets the color of the cookie to the value passed in. This is a valid class.

Now that we have a class, we can create new cookies from it. To create a new cookie, we use the `new` keyword followed by the name of the class and parentheses. The parentheses can be empty or can contain arguments to pass to the constructor.

```js
let cookie1 = new Cookie('red')
```

`cookie1` is the specific instance of the `Cookie` class.

We will now expand the `Cookie` class to include two more methods.

```js
class Cookie {
  constructor(color) {
    this.color = color
  }

  getColor() {
    return this.color
  }

  setColor(color) {
    this.color = color
  }
}
```

The `getColor` method returns the color of the cookie. The `setColor` method sets the color of the cookie to a new value.

We will be using Classes to create data structures. A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Data structures are used to store collections of data, such as lists, stacks, queues, trees, and graphs.
