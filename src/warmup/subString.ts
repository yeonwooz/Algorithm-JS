function solution(str: string) {
  const len = str.length
  if (len === 0) {
    return ''
  }

  if (len % 2 === 0) {
    // 4
    return str.substring(len / 2 - 1, len / 2 + 1)
  } else {
    // 5
    return str.substring(len / 2, len / 2 + 1)
  }
}

export { solution as subString }
