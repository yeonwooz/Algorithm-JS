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
export { solution as binaryRecursion }
