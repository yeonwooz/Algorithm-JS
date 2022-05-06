/*
Let's practice for loop

ref1: https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript
ref2: https://wonyoung2257.tistory.com/26 
*/

// 케이스1 : 문자열을 1칸, 2칸, ... 절반 길이(i)까지 자르는 각각의 경우에 대해, 첫번째 chunk의 끝인덱스부터 s의 마지막 인덱스까지 길이 i만큼의 문자열chunk 들을 탐색해나간다
function solution(s) {
  console.log('length is', s.length)

  for (let i = 1; i < Math.floor(s.length / 2); ++i) {
    console.log('First Depth, i =', i)

    // i: 1, 2,  ... Math.floor(s.length/2)
    let str = ''
    let cnt = 1
    let tempStr = s.substring(0, i)
    let idx = 0

    for (idx = i; idx <= s.length; idx++) {
      // ++ 랑 동일하게 동작함

      let nextStr = s.substring(idx, idx + i)
      console.log('Second Depth, idx=', idx, '/ nextStr=', nextStr)

      // ...
    }
  }
}

// resolving
function solution(s) {
  for (let i = 1; i < Math.floor(s.length / 2); ++i) {
    // 8글자 -> 1,2,3,4
    // 9글자 -> 1,2,3,4
    for (let j = i; j < s.length - i + 1; ++j) {
      // i = 1 이면 1칸씩 잘라서 탐색
      // i = 2 이면 2칸씩 잘라서 탐색
      const sample = s.substring(0, i) // 고정
      const chunk = s.substring(j, j + i) // 자르면서 이동
      console.log(sample, chunk)
    }
  }
}
export { solution as forLoop1 }
