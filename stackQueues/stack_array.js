// google
// udemy.com
//youtube.com


class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}
class Stack {
  constructor() {
    this.array = []
  }
  peek() {
    return this.array[this.array.length - 1]
  }
  push(value) {
    this.array.push(value)
    console.log(this);
    return this
  }
  pop() {
    this.array.pop()
    return this
  }
}

const myStack = new Stack()

myStack.peek()
myStack.push('google')
myStack.push('udemy')
// myStack.pop('udemy')
// myStack.pop('google')