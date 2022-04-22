function solution(n: number): void {
  if (n === 0) {
    return
  }

  solution(n - 1)
  console.log(n)
}

// 일반재귀
function solution2(n: number): number[] {
  let arr: number[] = []
  if (n === 1) {
    ;[1].concat(arr)
    return
  }

  return solution3(n - 1, [n].concat(arr))
}

//꼬리재귀
function solution3(n: number, arr: number[]): number[] {
  if (n === 1) {
    return [1].concat(arr)
  }

  return solution3(n - 1, [n].concat(arr))
}
export { solution as recursion1 }

export { solution2 as recursion2 }
