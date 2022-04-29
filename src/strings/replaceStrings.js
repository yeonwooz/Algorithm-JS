/*
2021 Kakao internship 
*/

function solution(s) {
  const dicts = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]

  let answer = s

  for (let i = 0; i < 10; ++i) {
    let arr = answer.split(dicts[i])

    if (arr.length > 1) {
      console.log(i, dicts[i])
      answer = answer.replace(dicts[i], i)
    }
  }

  return parseInt(answer)
}
