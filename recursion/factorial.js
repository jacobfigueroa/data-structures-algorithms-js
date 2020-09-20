const iterative = (n) => {
  let factorial = n
  for (let i = n - 1; i >= 1; i--) {
    factorial *= i
  }
  return factorial
}

const recursive = (n) => {
  if (n <= 1) {
    return 1
  }
  return n * recursive(n - 1)
}

console.log(iterative(5))
console.log(recursive(5))

console.log(iterative(10))
console.log(recursive(10))
