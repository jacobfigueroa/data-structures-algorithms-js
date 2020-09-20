const firstRecurringChar = (array) => {
  const chars = {}
  for (let i = 0; i < array.length; i++) {
    const char = array[i]
    if (chars[char]) {
      return char
    }
    chars[char] = true
  }
  return undefined
}

let a = [2, 4, 3, 7, 4, 2, 3, 1]
console.log(firstRecurringChar(a))

a = [2, 4, 3, 7, 2, 2, 3, 1]
console.log(firstRecurringChar(a))

a = [2, 3, 4, 5]
console.log(firstRecurringChar(a))
