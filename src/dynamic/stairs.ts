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

  if (n === 3) {
    return 3
  }

  return solution(n - 1) + solution(n - 2)
}

export { solution as stairs }
