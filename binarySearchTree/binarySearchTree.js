const Queue = require("../queue/queue")

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    this.root = this._insertHelper(this.root, value)
  }

  _insertHelper(current, value) {
    if (!current) {
      return new Node(value)
    }

    if (value > current.value) {
      current.right = this._insertHelper(current.right, value)
    } else if (value < current.value) {
      current.left = this._insertHelper(current.left, value)
    } else {
      return current
    }

    return current
  }

  lookup(value) {
    return this._lookupHelper(this.root, value)
  }

  _lookupHelper(current, value) {
    if (!current) {
      return false
    }

    if (value > current.value) {
      return this._lookupHelper(current.right, value)
    } else if (value < current.value) {
      return this._lookupHelper(current.left, value)
    } else {
      return current
    }
  }

  remove(value) {
    // this.root = this.remove(this.root, value)

    const node = this.lookup(value)

    if (node) {
      if (node.left === null && node.right === null) {
        // leaf node
        node = null
      } else if (node.left === null) {
        // right child only
        node = node.right
      } else if (node.right === null) {
        // left child only
        node = node.left
      } else {
        // two children
        const { parent: minParent, node: minNode } = this.findMinAndParent(
          node,
          node.right
        )
        node.value = minNode.value
        minParent.left = null
      }
    }
  }

  findMinAndParent(parent, node) {
    if (node.left === null) {
      return { parent, node }
    } else {
      return this.findMinAndParent(node, node.left)
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root
    const queue = new Queue()
    const list = []
    queue.enqueue(currentNode)

    while (queue.count > 0) {
      currentNode = queue.dequeue().data
      list.push(currentNode.value)

      if (currentNode.left) {
        queue.enqueue(currentNode.left)
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right)
      }
    }

    return list
  }

  breadthFirstSearchRecursive() {
    const queue = new Queue()
    queue.enqueue(this.root)

    const list = []
    return this._breadthFirstSearchRecursive(queue, list)
  }

  _breadthFirstSearchRecursive(queue, list) {
    if (!queue.count) {
      return list
    }

    let currentNode = queue.dequeue().data
    list.push(currentNode.value)

    if (currentNode.left) {
      queue.enqueue(currentNode.left)
    }

    if (currentNode.right) {
      queue.enqueue(currentNode.right)
    }

    return this._breadthFirstSearchRecursive(queue, list)
  }

  inOrder() {
    return this._inOrder(this.root, [])
  }

  _inOrder(node, list) {
    if (node) {
      this._inOrder(node.left, list)
      list.push(node.value)
      this._inOrder(node.right, list)
    }
    return list
  }

  preOrder() {
    return this._preOrder(this.root, [])
  }

  _preOrder(node, list) {
    if (node) {
      list.push(node.value)
      this._preOrder(node.left, list)
      this._preOrder(node.right, list)
    }
    return list
  }

  postOrder() {
    return this._postOrder(this.root, [])
  }

  _postOrder(node, list) {
    if (node) {
      this._postOrder(node.left, list)
      this._postOrder(node.right, list)
      list.push(node.value)
    }
    return list
  }
}

module.exports = BinarySearchTree
