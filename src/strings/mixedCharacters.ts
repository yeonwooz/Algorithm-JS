/*
2021 카카오 채용연계형 인턴십 문제 - 숫자 문자열과 영단어
*/

function solution(s: string) {
  let arr = s.split('')
  const group1 = ['z', 'o', 'e', 'n']
  const group2 = ['t', 'f', 's']
  const letterProps = {
    z: { length: 4, n: 0 },
    o: { length: 3, n: 1 },
    t: { w: { length: 3, n: 2 }, h: { length: 5, n: 3 } },
    f: { o: { length: 4, n: 4, i: { length: 4, n: 5 } } },
    s: { i: { length: 3, n: 6 }, e: { length: 5, n: 7 } },
    e: { length: 5, n: 8 },
    n: { length: 4, n: 9 },
  }

  for (let i = 0; i < arr.length; ++i) {
    if (group1.includes(arr[i])) {
      const prop = letterProps[arr[i]]
      prop && arr.splice(i, prop['length'], prop['n'])
    } else if (group2.includes(arr[i])) {
      const prop = letterProps[arr[i]][arr[i + 1]]
      prop && arr.splice(i, prop['length'], prop['n'])
    }
  }

  return parseInt(arr.join(''))
}
export { solution as convertMixedCharactersIntoNumbers }
