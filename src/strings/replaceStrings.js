/*
2021 Kakao internship 
*/

// replace / replaceAll 치환

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
    // answer = answer.replaceAll(dicts[i], i)
    // replaceAll은 최신스펙이므로 사용할 수 없는 경우도 있다
    // for (let j = 0; j < answer.length; ++j) {
    //     // 불필요하게 많이 반복하여 메모리 낭비 발생
    //   answer = answer.replace(dicts[i], i)
    // }
    const splitted = answer.split(dicts[i])
    answer = splitted.join(i)
  }

  return parseInt(answer)
}
