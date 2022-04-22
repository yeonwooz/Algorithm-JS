function solution(n: number): number | string {
  if (n / 2 <= 1) {
    return String(n / 2) + String(n % 2)
  } else {
    return parseInt(solution(Math.floor(n / 2)) + String(n % 2))
  }
}

function solution2(n: number): number | string {
  let answer = ''
  function DFS(n: number): number {
    if (n === 0) {
      return
    } else {
      DFS(Math.floor(n / 2))
      answer += String(n % 2)
    }
  }

  DFS(n)
  return parseInt(answer)
}
export { solution as binaryRecursion }
