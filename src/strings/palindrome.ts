/*
Q. figure out the string given as a parameter is a palindrome and return 'YES' of 'NO'
case 1. division between upper letters and lower letters
case 2. no division between upper letters and lower letters

*/

function solution(str: string): string {
  if (str.length === 0) {
    return 'NO'
  }
  if (str.length === 1) {
    return 'YES'
  }

  //  0  length -1
  //  1    length - 2
  // length = 2   4 - 1
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === str[str.length - (i + 1)]) {
      //   console.log(str[i], str[str.length - (i + 1)])

      const trimmed = str.slice(i + 1, str.length - (i + 1))
      //   console.log(7777, trimmed.length)

      if (trimmed.length === 0) {
        return 'YES'
      }
      return solution(trimmed)
    }
    return 'NO'
  }

  return 'NO'
}

export { solution as palindrome }
