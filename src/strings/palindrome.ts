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

  if (str[0] === str[str.length - 1]) {
    const trimmed = str.slice(1, str.length - 1)
    if (trimmed.length === 0) {
      return 'YES'
    }
    return solution(trimmed)
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

  if (lowers[0] === lowers[lowers.length - 1]) {
    const trimmed = lowers.slice(1, lowers.length - 1)
    if (trimmed.length === 0) {
      return 'YES'
    }
    return solution(trimmed)
  }

  return 'NO'
}
export { solution as palindrome }
