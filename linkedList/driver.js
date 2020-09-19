const LinkedList = require("./linkedList")

const myLinkedList = new LinkedList()
myLinkedList.append(1)
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.prepend(5)
myLinkedList.insert(5, "A")
myLinkedList.append(6)

myLinkedList.list()
console.log("---------")

myLinkedList.delete(6)
myLinkedList.list()
console.log("---------")