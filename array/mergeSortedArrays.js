const mergeSortedArrays = (array1, array2) => {
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

  // Fill up remaining elements of the array with contents of array1
  if (i >= array1.length) {
    while (j < array2.length) {
      sortedArray[next++] = array2[j++]
    }
  }

  // Fill up remaining elements of the array with contents of array2
  if (j >= array2.length) {
    while (i < array1.length) {
      sortedArray[next++] = array1[i++]
    }
  }

  return sortedArray
}

let a = [1, 7, 9, 12, 45]
let b = [5, 8, 21, 27]

console.log(mergeSortedArrays(a, b))

a = [23, 121, 312, 423, 445, 488, 500]
b = [1, 10, 30, 400, 900]

console.log(mergeSortedArrays(a, b))
