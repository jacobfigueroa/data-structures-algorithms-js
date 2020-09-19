class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addVertex(node) {
    if (this.adjacentList[node]) {
      console.log(`Vertex ${node} already exists`)
      return
    }

    this.adjacentList[node] = {}
    this.numberOfNodes++
  }

  addEdge(node1, node2, directed = false) {
    if (!this.adjacentList[node1]) {
      console.log(`${node1} does not exist`)
      return
    }

    if (!this.adjacentList[node2]) {
      console.log(`${node2} does not exist`)
      return
    }

    if (this.adjacentList[node1][node2]) {
      console.log(`edge between ${node1} and ${node2} already exists`)
    } else {
      this.adjacentList[node1][node2] = true
    }

    if (!directed) {
      if (this.adjacentList[node2][node1]) {
        console.log(`edge between ${node2} and ${node1} already exists`)
      } else {
        this.adjacentList[node2][node1] = true
      }
    }
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList)
    allNodes.forEach(node => {
      let nodeConnections = Object.keys(this.adjacentList[node])
      let connections = ""
      nodeConnections.forEach(vertex => {
        connections += vertex + " "
      })
      console.log(`${node} --> ${connections}`)
    })
  }
}

module.exports = Graph
