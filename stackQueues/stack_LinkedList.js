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
    this.top = null;
    this.bottom = null;
    this.length = 0
  }
  peek() {
    return this.top
  }
  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++
    return this
  }
  pop() {
    if (!this.top) {
      return null
    } else {
      if (this.top === this.bottom) {
        this.bottom = null
      }
      this.top = this.top.next;
      this.length--
      console.log(this);
      return this
    }
  }
}

const myStack = new Stack()

myStack.peek()
myStack.push('google')
myStack.push('udemy')
myStack.pop('udemy')
myStack.pop('google')