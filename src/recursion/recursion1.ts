function solution(n: number): void {
  if (n === 1) {
    console.log(n)
    return
  }

  solution(n - 1)
  console.log(n)
}

export { solution as recursion1 }
