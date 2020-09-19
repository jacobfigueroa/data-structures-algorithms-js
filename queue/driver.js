const Queue = require("./queue")

const myQueue = new Queue()
myQueue.enqueue(1)
myQueue.list()

myQueue.enqueue(2)
myQueue.list()

myQueue.enqueue(3)
myQueue.list()

myQueue.dequeue()
myQueue.list()

myQueue.dequeue()
myQueue.list()

myQueue.dequeue()
myQueue.list()

myQueue.dequeue()
myQueue.list()