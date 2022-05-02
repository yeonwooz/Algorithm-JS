/*
2020 KAKAO BLIKD 문자열 압축
*/

function solution(s) {
  let firstRepeatIndex = -1
  const firstLetterStack = []

  let i = 0
  while (i < s.length) {
    if (s[i] === s[0]) {
      firstRepeatIndex = i
      firstLetterStack.push({ idx: i, value: s[i] })
    }
    ++i
  }

  if (firstLetterStack.length === 1) {
    return s.length
  }

  firstRepeatIndex = firstLetterStack[1].idx
  console.log(firstLetterStack)

  const stackArray = Array.from(
    Array(firstLetterStack.length),
    () => new Array()
  )
  // console.log(stackArray)
  for (let i = 0; i < firstLetterStack.length; ++i) {
    for (let j = 0; j < firstLetterStack[1].idx; ++j) {
      if (s[j] === s[j + firstLetterStack[i].idx]) {
        stackArray[i].push(s[j + firstLetterStack[i].idx])
      } else {
        break
      }
    }
  }
  // 막힌 부분: 반복되는 구간을 어떻게 자를 것인가?

  console.log(stackArray)
}
