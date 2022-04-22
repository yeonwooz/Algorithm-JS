function solution(n: number): number | string {
  if (n / 2 <= 1) {
    const a = n / 2
    const b = n % 2
    return a.toString() + b.toString()
  } else {
    const c = solution(Math.floor(n / 2)) + (n % 2).toString()
    return parseInt(c)
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
export { solution2 as binaryRecursion }
