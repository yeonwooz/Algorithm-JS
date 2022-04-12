/*
Q. Figure out the max revenue of the days (given as a parameter) in a row during the peroid (given as a parameter)
*/

function solution(
  n: number, // 5 <= n <= 100,000
  k: number, // 2 <= k <= n
  revenues: number[] // 0 <= each number <= 500
): number {
  let maxRevenue = 0

  for (let i = 0; i <= n - k + 1; ++i) {
    const revArray = revenues.slice(i, i + k)
    const sumRev = revArray.reduce((prev, curr) => prev + curr, 0)
    if (sumRev > maxRevenue) {
      maxRevenue = sumRev
    }
  }

  return maxRevenue
}

// 연산 재사용
function solution2(
  n: number, // 5 <= n <= 100,000
  k: number, // 2 <= k <= n
  revenues: number[] // 0 <= each number <= 500
): number {
  let answer,
    sum = 0 // comma operator

  for (let i = 0; i < k; ++i) {
    sum += revenues[i]
  }
  answer = sum

  for (let i = k; i < n; ++i) {
    sum += revenues[i] - revenues[i - k]
    answer = Math.max(answer, sum)
  }
  return answer
}

export { solution2 as getMaxRevenue }
