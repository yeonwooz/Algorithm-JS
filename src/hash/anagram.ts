/*
Q. Check whether two strings are anagram of each other.
*/

function solution(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return 'NO'
  }

  const map1 = new Map<string, number>()
  const map2 = new Map<string, number>()

  for (let char of str1) {
    if (!map1.has(char)) {
      map1.set(char, 0)
    } else {
      map1.set(char, map1.get(char) + 1)
    }
  }

  for (let char of str2) {
    if (!map2.has(char)) {
      map2.set(char, 0)
    } else {
      map2.set(char, map2.get(char) + 1)
    }
  }

  for (let [char, charCount] of map1) {
    if (map2.get(char) !== charCount) {
      return 'NO'
    }
  }

  return 'YES'
}

export { solution as checkAnagram }
