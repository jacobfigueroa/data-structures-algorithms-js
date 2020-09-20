class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    const item = this.data[index]
    this.shiftItemsLeft(index)
    return item
  }

  shiftItemsLeft(index) {
    for (let i = index; index < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

const newArray = new MyArray()
newArray.push("yo")
newArray.push("wow")
newArray.push("!")
newArray.pop()
newArray.push("whoa")
newArray.push("neato")
newArray.delete(3)
console.log(newArray)
