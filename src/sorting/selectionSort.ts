/*
Q. Sort the array given as a parameter in ascending order.
(The elements are all natural numbers)
*/

function solution(arr: number[]): number[] {
  const sorted = arr

  for (let i = 0; i < arr.length - 1; ++i) {
    let idx = i
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[idx]) {
        idx = j
      }
    }
    ;[arr[i], arr[idx]] = [arr[idx], arr[i]] // 원소자리 교체
  }
  return sorted
}
export { solution as selectionSort }
