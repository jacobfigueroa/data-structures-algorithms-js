const BinarySearchTree = require("./binarySearchTree")

//        50
//      /    \
//     30      72
//   /   \        \
// 5      38      100
//  \    /  \    /
//  14  33  40  80


const myTree = new BinarySearchTree()
myTree.insert(50)
myTree.insert(72)
myTree.insert(30)
myTree.insert(100)
myTree.insert(5)
myTree.insert(80)
myTree.insert(38)
myTree.insert(14)
myTree.insert(33)
myTree.insert(40)

console.log("BFS")
console.log(myTree.breadthFirstSearch())
console.log(myTree.breadthFirstSearchRecursive())

console.log("DFS")
console.log("InOrder")
console.log(myTree.inOrder())
console.log("PreOrder")
console.log(myTree.preOrder())
console.log("PostOrder")
console.log(myTree.postOrder())
return

console.log(50, myTree.lookup(50))
console.log(51, myTree.lookup(51))
console.log(80, myTree.lookup(80))
console.log(3, myTree.lookup(3))

const traverse = node => {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}


// console.log(JSON.stringify(traverse(myTree.root)))

// myTree.remove(80)

myTree.remove(30)
console.log(JSON.stringify(traverse(myTree.root)))

// Should look like this
//        50
//      /    \
//     33      72
//   /   \        \
// 5      38      100
//  \       \    /
//  14      40  80
