function recursive(n: number): number {
  /*
    a(1) = 1
    a(2) = 2
    a(3) = 4
    a(4) = 7
    */

  if (n <= 2) {
    return n
  }

  if (n === 3) {
    return 4
  }

  return recursive(n - 3) + recursive(n - 2) + recursive(n - 1)
}

function solution(n: number): number {
  return recursive(n + 1)
}

export { solution as stoneBridge }
