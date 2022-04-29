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
    answer = answer.replace(dicts[i], i)
  }

  return parseInt(answer)
}
