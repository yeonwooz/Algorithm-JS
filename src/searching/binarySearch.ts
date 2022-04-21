/*
< Binary Search >
Q. get number (index+1) of target number

*/

// arr.length >= 3
function solution(m: number, arr: number[]): number {
  let i = 0
  let num = 1
  while (i < arr.length) {
    if (arr[i] < m) {
      num++
    }
    i++
  }

  return num
}

export { solution as binarySearch }
