// n : 전체 곡의 수 , m: DVD수, arr: 차례대로 곡의 길이

function count(songs: number[], capacity: number): number {
  let currentDvdSize = 0
  let count = 1

  for (let i = 0; i < songs.length; ++i) {
    if (currentDvdSize + songs[i] <= capacity) {
      currentDvdSize += songs[i]
    } else if (currentDvdSize + songs[i] > capacity) {
      count++
      currentDvdSize = songs[i]
    }
  }
  return count
}

function solution(n: number, m: number, arr: number[]): number {
  // 구하려는 값: 최소 dvdSize
  // 구하려는 값의 범위(이진탐색범위) : arr의 최대값 이상 sum 이하

  const maxSongSize = Math.max(...arr)
  const sum = arr.reduce((a, b) => a + b, 0)

  let lt = maxSongSize
  let rt = sum
  let dvdSize
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2)

    if (count(arr, mid) <= m) {
      dvdSize = mid
      rt = mid - 1
    } else {
      lt = mid + 1
    }
  }

  return dvdSize
}

export { solution as decisionTree }
