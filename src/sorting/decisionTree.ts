// n : 전체 곡의 수 , m: DVD수, arr: 차례대로 곡의 길이

function solution(n: number, m: number, arr: number[]) {
  const sum = arr.reduce((a, b) => a + b, 0)
  let dvdSize

  let lt = 0,
    rt = arr.length - 1

  while (lt <= rt) {
    const firstGroup = arr.slice(0, sum / m)

    const firstGroupSum = firstGroup.reduce((a, b) => a + b, 0)
    const restSum = sum - firstGroupSum
    if (firstGroupSum === restSum / (m - 1)) {
      dvdSize = firstGroupSum
      break
    } else {
      dvdSize = firstGroupSum + 1
      break
    }
  }

  return dvdSize
}

export { solution as decisionTree }
