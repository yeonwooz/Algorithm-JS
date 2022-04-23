/*
<Dynamic Programming>
동적계획법 : 점화식에서 a(n)을 이전 항과의 관계식으로 구하는 방법

Q. Get the number of ways to go upstairs through 'n' stairs. 
For each step you can go one or two stairs at once.
*/

function solution(n: number): number {
  /*
    a(n) = n칸오르기
    a(n) 은 a(n-1) + a(n-2)
    */

  if (n <= 2) {
    return n
  }

  return solution(n - 1) + solution(n - 2)
}

function solution2(n: number): number {
  let dy: number[] = Array.from({ length: n + 1 })
  dy.fill(0)
  dy[0] = 1
  dy[1] = 2
  for (let i = 2; i < n + 1; ++i) {
    dy[i] = dy[i - 2] + dy[i - 1]
    console.log(dy[i])
  }

  return dy[n - 1]      //인덱스이므로 -1
}

export { solution2 as stairs }
