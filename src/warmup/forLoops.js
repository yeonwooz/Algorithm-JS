/*
Let's practice for loop

ref1: https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript
ref2: https://wonyoung2257.tistory.com/26 

*/

function solution(s) {
  for (let i = 1; i < Math.floor(s.length / 2); ++i) {
    // i: 1, 2,  ... Math.floor(s.length/2)
    console.log('First Depth, i =', i)
    let idx = 0
    for (idx = i; idx <= 10; idx += 1) {
      // ++ 랑 다르게 동작하는지?
      console.log('Second Depth, idx=', idx)
    }
  }
}

export { solution as forLoop1 }
