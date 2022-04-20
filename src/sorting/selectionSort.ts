/*
<Selection Sorting>
Q. Sort the array given as a parameter in ascending order.
(The elements are all natural numbers)
*/

function solution(arr: number[]): number[] {
  const sorted = arr

  for (let i = 0; i < arr.length - 1; ++i) {
    let idx = i
    // 기준인덱스
    for (let j = i + 1; j < arr.length; ++j) {
        // i 보다 하나 큰 인덱스부터 탐색한다 
      if (arr[j] < arr[idx]) {
        // 탐색하는 현재 숫자와 기준인덱스의 숫자를 비교하여,
        idx = j
        // 더 작은 수를 가진 인덱스를 기준인덱스로 삼는다
      }
    }
    ;[arr[i], arr[idx]] = [arr[idx], arr[i]]
    // i번째 숫자와 기준인덱스의 숫자를 서로 교체
  }
  return sorted
}
export { solution as selectionSort }
