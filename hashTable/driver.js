const HashTable = require("./HashTable")

const myHashTable = new HashTable(10)

myHashTable.set("grapes", 20)
console.log(myHashTable.get("grapes"))

myHashTable.set("apples", 10)
console.log(myHashTable.get("apples"))

myHashTable.set("oranges", 3)
console.log(myHashTable.get("oranges"))

myHashTable.set("bananas", 4)
console.log(myHashTable.get("bananas"))

myHashTable.list()
console.log(myHashTable.keys())
