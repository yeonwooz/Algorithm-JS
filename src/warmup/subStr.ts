function solution(str: string) {
  const len = str.length
  if (len === 0) {
    return ''
  }

  /*
  substr method will be deprecated soon 
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr
  */
  if (len % 2 === 0) {
    return str.substr(len / 2 - 1, 2)
  } else {
    return str.substr(Math.floor(len / 2), 1)
  }
}

export { solution as subStr }
