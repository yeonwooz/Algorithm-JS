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

function solution2(m: number, arr: number[]): number {
  let answer
  // 이분탐색 하려면 일단 순서대로 정렬되어있어야 함
  arr.sort((a, b) => a - b)
  let lt = 0,
    rt = arr.length - 1

  // 양쪽에서 중간으로 서치해옴
  while (lt <= rt) {
    let mid: number = Math.floor((lt + rt) / 2)

    if (arr[mid] === m) {
      answer = mid + 1
      break
    } else if (arr[mid] > m) {
      rt = mid - 1
    } else {
      lt = mid + 1
    }
  }

  return answer
}

export { solution2 as binarySearch }
