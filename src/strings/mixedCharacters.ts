/*
2021 카카오 채용연계형 인턴십 문제 - 숫자 문자열과 영단어
*/

function solution(s: string) {
  let numbers = [
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
  var answer = s

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i])
    answer = arr.join(i.toString())
  }

  return parseInt(answer)
}

export { solution as convertMixedCharactersIntoNumbers }
