const { PerformanceObserver, performance } = require("perf_hooks")

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    const temp = array[i]
    array[i] = array[min]
    array[min] = temp
  }
  return array
}

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    } else {
      for (let j = 1; j < array.length; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }
  return array
}

const insertionSort2 = (array) => {
  let i = 1
  while (i < array.length) {
    let j = i
    while (j > 0 && array[j - 1] > array[j]) {
      const temp = array[j]
      array[j] = array[j - 1]
      array[j - 1] = temp
      j--
    }
    i++
  }
  return array
}

// same as insertionSort2 but with a for loop
const insertionSort3 = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      const temp = array[j]
      array[j] = array[j - 1]
      array[j - 1] = temp
    }
  }
  return array
}

const mergeSort = (array) => {
  if (array.length === 1 || !array.length) {
    return array
  }

  const middleIndex = array.length / 2
  const left = array.slice(0, middleIndex)
  const right = array.slice(middleIndex, array.length)

  return _merge(mergeSort(left), mergeSort(right))
}

// Merges two sorted arrays
const _merge = (array1, array2) => {
  const sortedArray = new Array(array1.length + array2.length)

  let i = 0
  let j = 0
  let next = 0

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      sortedArray[next++] = array1[i++]
    } else {
      sortedArray[next++] = array2[j++]
    }
  }

  // Fill up remaining elements of the array with contents of array2
  if (i >= array1.length) {
    while (j < array2.length) {
      sortedArray[next++] = array2[j++]
    }
  }

  // Fill up remaining elements of the array with contents of array1
  if (j >= array2.length) {
    while (i < array1.length) {
      sortedArray[next++] = array1[i++]
    }
  }

  return sortedArray
}

// const myArray = [21, 32, 4, 1, 12, 45, 55, 7, 13, 31, 99, 9, 56, 26, 91, 81, 37, 42, 44, 12, 13, 2, 3, 18]
const myArray = [
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
  21,
  32,
  4,
  1,
  12,
  45,
  55,
  7,
  13,
  31,
  99,
  9,
  56,
  26,
  91,
  81,
  37,
  42,
  44,
  12,
  13,
  2,
  3,
  18,
]

console.log(performance.now())
console.log(bubbleSort([...myArray]))
console.log(performance.now())
console.log(selectionSort([...myArray]))
console.log(performance.now())
console.log(insertionSort([...myArray]))
console.log(performance.now())
console.log(insertionSort2([...myArray]))
console.log(performance.now())
console.log(insertionSort3([...myArray]))
console.log(performance.now())

console.log(mergeSort([...myArray]))

console.log(performance.now())
