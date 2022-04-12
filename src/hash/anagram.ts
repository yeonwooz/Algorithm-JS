/*
Q. Check whether two strings are anagram of each other.
*/



function solution(str1: string, str2: string): string {
  if (str1.length !== str2.length) {
    return 'NO'
  }

  const charMap = new Map<string, number>()

  for (let char of str1) {
    if (!charMap.has(char)) {
      charMap.set(char, 1)
    } else {
      charMap.set(char, charMap.get(char) + 1)
    }
  }

  for (let char of str2) {
    if (!charMap.has(char) || charMap.get(char) === 0) {
      return 'NO'
    }
    charMap.set(char, charMap.get(char) - 1)
  }

  return 'YES'
}

export { solution as checkAnagram }
