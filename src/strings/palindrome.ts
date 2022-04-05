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

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === str[str.length - (i + 1)]) {
      const trimmed = str.slice(i + 1, str.length - (i + 1))
      if (trimmed.length === 0) {
        return 'YES'
      }
      return solution(trimmed)
    }
    return 'NO'
  }

  return 'NO'
}

function solution2(str: string): string {
  const lowers = str.toLowerCase()
  if (lowers.length === 0) {
    return 'NO'
  }
  if (lowers.length === 1) {
    return 'YES'
  }

  for (let i = 0; i < lowers.length; ++i) {
    if (lowers[i] === lowers[lowers.length - (i + 1)]) {
      const trimmed = lowers.slice(i + 1, lowers.length - (i + 1))
      if (trimmed.length === 0) {
        return 'YES'
      }
      return solution(trimmed)
    }
    return 'NO'
  }

  return 'NO'
}
export { solution2 as palindrome }
