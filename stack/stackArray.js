class Stack {
  constructor() {
    this.data = []
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  push(x) {
    this.data.push(x)
  }

  pop() {
    this.data.pop()
  }

  list() {
    console.log("<Top>")
    for (let i = this.data.length - 1; i >= 0; i--) {
      console.log(this.data[i])
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
