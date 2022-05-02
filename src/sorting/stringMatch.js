/*
2021 Dev-Matching
*/

function solution(lottos, win_nums) {
  // 둘다 중복없는 배열
  // 0의 개수 파악
  // win_nums 와 lottos 겹치는 수 파악
  // 겹치는 수의 개수 : 최저순위 번호 개수
  // 겹치는 수의 개수 + 0의 개수 : 최고순위 번호 개수

  const winnerMap = {
    // 일치개수 : 순위
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  }

  const zeroCnt = lottos.filter((num) => num === 0).length

  let matchCnt = 0

  for (let num1 of lottos) {
    for (let num2 of win_nums) {
      if (num1 === num2) {
        matchCnt++
      }
    }
  }

  matchCnt = matchCnt
  console.log(zeroCnt, zeroCnt + matchCnt)

  const highest = winnerMap[matchCnt + zeroCnt]
  const lowest = winnerMap[matchCnt]
  // console.log([highest, lowest])
  return [highest, lowest]
}
