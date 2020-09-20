// 0, 1, 1, 2, 3, 5, 8, 13 and 21

const iterative = (n) => {
  if (n < 2) {
    return n
  }

  let prev = 1
  let prevprev = 0
  let answer = prev + prevprev
  for (let i = 2; i <= n; i++) {
    answer = prev + prevprev
    prevprev = prev
    prev = answer
  }
  return answer
}

const recursive = (n) => {
  if (n < 2) {
    return n
  }
  return recursive(n - 1) + recursive(n - 2)
}

const recursiveMemoization = () => {
  const cache = {}
  return (fib = (n) => {
    if (n < 2) {
      return n
    }

    let n1
    if (!(n - 1 in cache)) {
      cache[n - 1] = fib(n - 1)
    }
    n1 = cache[n - 1]

    let n2
    if (!(n - 2 in cache)) {
      cache[n - 2] = fib(n - 2)
    }
    n2 = cache[n - 2]

    return n1 + n2
  })
}

const recursiveMemoization2 = () => {
  const cache = {}
  return (fib = (n) => {
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  })
}

const bottomUpMemoization = (n) => {
  const answer = [0, 1]
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 1] + answer[i - 2])
  }
  return answer[n]
}

const bottomUpMemoization2 = (n) => {
  // No resizing of an array
  const answer = new Array(n + 1)
  answer[0] = 0
  answer[1] = 1
  for (let i = 2; i <= n; i++) {
    answer[i] = answer[i - 1] + answer[i - 2]
  }
  return answer[n]
}

const recursiveM = recursiveMemoization()
const recursiveM2 = recursiveMemoization2()

console.log(iterative(5))
console.log(recursive(5))

console.log(iterative(15))
console.log(recursive(15))

console.log(iterative(40))
console.log(recursiveM(40))
console.log(recursiveM2(40))
console.log(bottomUpMemoization(40))
console.log(bottomUpMemoization2(40))
console.log(recursive(40))
