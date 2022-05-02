/*
2020 KAKAO BLIKD 문자열 압축
*/

function solution(s) {
  let firstLetterIndex = 0
  let i = 0
  while (i < s.length) {
    if (s[i] === s[0]) {
      firstLetterIndex = i
    }
    ++i
  }

  if (firstLetterIndex === 0) {
    return s.length
  }

  // const arr = s.split('')
  // indexOf, slice 사용해보기

  // for (let i = 0; i < s.length; ++i) {
  //     let chunk = s.slice(1)
  // }

  let repeatLength = 0

  function getChunk(length) {
    if (length === 1) {
      repeatLength = 1
      return
    }

    const chunk = s.slice(0, length)
    const fromOne = s.slice(chunk.length - 1)
    const idx = fromOne.indexOf(chunk)

    if (idx > 0) {
      repeatLength = length
      return
    } else {
      getChunk(length - 1)
    }
  }

  getChunk(s.length)

  console.log(repeatLength)

  // return s.length - repeatLength + 1
  // return
}
