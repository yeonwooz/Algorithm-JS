/*
<Dynamic Programming>

Q. Get the number of ways to go upstairs through 'n' stairs. 
For each step you can go one or two stairs at once.
*/

function solution(n: number): number {
  /*
    a(n) = n칸오르기
    a(n) 은 a(n-1) + a(n-2)
    */

  if (n <= 2) {
    return 1
  }
  if (n === 3) {
    return 3
  }
  if (n === 4) {
    return 5
  }

  return solution(n - 1) + solution(n - 2)
}

export { solution as stairs }
