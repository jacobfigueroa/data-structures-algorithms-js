class Node {
  constructor(x) {
    this.data = x
    this.next = null
    this.prev = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.count = 0
  }

  peek() {
    if (this.top) {
      return this.top.data
    }
  }

  push(x) {
    const node = new Node(x)
    if (!this.top) {
      this.top = node
      this.bottom = node
    } else {
      node.prev = this.top
      this.top.next = node
      this.top = node
    }
    this.count++
  }

  pop() {
    if (!this.top) {
      return
    }
    const unwantedNode = this.top
    this.top = unwantedNode.prev

    if (this.top) {
      this.top.next = null
    } else {
      this.bottom = null
    }

    this.count--
    return unwantedNode.data
  }

  list() {
    console.log("<Top>")
    let current = this.top
    while (current) {
      console.log(current.data)
      current = current.prev
    }
    console.log("<Bottom>")
  }
}

const myStack = new Stack()
myStack.push(1)
myStack.list()

myStack.push(2)
myStack.list()

myStack.push(3)
myStack.list()

myStack.pop()
myStack.list()

myStack.pop()
myStack.list()

myStack.pop()
myStack.list()

myStack.pop()
myStack.list()
