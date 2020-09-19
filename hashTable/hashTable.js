class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    const index = this._hash(key)
    if (!this.data[index]) {
      this.data[index] = []
    }
    this.data[index].push([key, value])
  }

  get(key) {
    const index = this._hash(key)
    const bucket = this.data[index]
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const keyValue = bucket[i]
        if (keyValue[0] === key) {
          return keyValue[1]
        }
      }
    }
    return undefined
  }

  list() {
    console.log(this.data)
  }

  keys() {
    const keysArray = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          const keyValue = this.data[i][j]
          keysArray.push(keyValue[0])
        }
      }
    }
    return keysArray
  }
}

module.exports = HashTable
