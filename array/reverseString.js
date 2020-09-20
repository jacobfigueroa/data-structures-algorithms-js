const reverseString = (str) => {
  const characterArray = str.split("")
  const length = characterArray.length
  for (let i = 0; i < length / 2; i++) {
    let temp = characterArray[i]
    characterArray[i] = characterArray[length - 1 - i]
    characterArray[characterArray.length - 1 - i] = temp
  }
  return characterArray.join("")
}

console.log(reverseString("Jacob"))
