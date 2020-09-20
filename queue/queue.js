class Node {
  constructor(x) {
    this.data = x
    this.next = null
    this.prev = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.count = 0
  }

  peek() {
    if (this.first) {
      return this.first.data
    }
  }

  enqueue(x) {
    const node = new Node(x)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      node.prev = this.last
      this.last = node
    }
    this.count++
  }

  dequeue() {
    const oldFirst = this.first
    if (!this.first) {
      return
    } else {
      const second = this.first.next
      if (second) {
        second.prev = null
        this.first = second
      } else {
        this.first = null
        this.last = null
      }
    }
    this.count--
    return oldFirst
  }

  list() {
    console.log("<First>")
    let current = this.first
    while (current) {
      console.log(current.data)
      current = current.next
    }
    console.log("<Last>")
  }
}

module.exports = Queue
