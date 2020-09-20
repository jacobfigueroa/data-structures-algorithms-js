class Node {
  constructor(x) {
    this.data = x
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  append(x) {
    const node = new Node(x)
    if (!this.head) {
      this._insertInitialNode(node)
    } else {
      this._insertAfterTail(node)
    }
  }

  prepend(x) {
    const node = new Node(x)
    if (!this.head) {
      this._insertInitialNode(node)
    } else {
      this._insertBeforeHead(node)
    }
  }

  _insertInitialNode(node) {
    this.head = node
    this.tail = node
    this.count++
  }

  _insertBeforeHead(node) {
    const currentHead = this.head
    currentHead.prev = node
    node.next = currentHead
    this.head = node
    this.count++
  }

  _insertAfterTail(node) {
    const currentTail = this.tail
    currentTail.next = node
    node.prev = currentTail
    this.tail = node
    this.count++
  }

  insert(index, x) {
    if (index > this.count) {
      throw new Error("Index cannot exceed the count")
    }

    const node = new Node(x)
    if (!this.head) {
      this._insertInitialNode(node)
    } else if (index === 0) {
      this._insertBeforeHead(node)
    } else if (index === this.count) {
      this._insertAfterTail(node)
    } else {
      let i = 0
      let prevCurrent = null
      let current = this.head
      while (current) {
        if (i === index) {
          prevCurrent.next = node
          node.prev = prevCurrent

          node.next = current
          current.prev = node
          this.count++
          break
        }
        prevCurrent = current
        current = current.next
        i++
      }
    }
  }

  delete(index) {
    if (index >= this.count) {
      throw new Error("Index cannot exceed the count")
    }

    if (!this.head) {
      throw new Error("List is empty")
    } else if (index === 0 && this.count === 1) {
      // delete the entire list
      this.head = null
      this.tail = null
    } else if (index === 0) {
      // delete head
      const newHead = this.head.next
      newHead.prev = null
      this.head = newHead
    } else if (index === this.count - 1) {
      // delete tail
      const newTail = this.tail.prev
      newTail.next = null
      this.tail = newTail
    } else {
      let i = 0
      let prevNode = null
      let current = this.head
      let nextNode = null
      while (current) {
        nextNode = current.next

        if (i === index) {
          prevNode.next = nextNode
          nextNode.prev = prevNode
          break
        }

        prevNode = current
        current = current.next
        i++
      }
    }
    this.count--
  }

  reverse() {
    let prevNode = null
    let current = this.head
    let nextNode = null
    while (current) {
      nextNode = current.next

      prevNode = current
      current = current.next
      i++
    }
  }

  list() {
    let node = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
    console.log(`count: ${this.count}`)
  }
}

module.exports = LinkedList
