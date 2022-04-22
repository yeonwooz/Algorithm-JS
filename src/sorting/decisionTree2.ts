function count(arr: number[], dist: number) {
  let count = 1
  let ep = arr[0]

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] - ep >= dist) {
      count++
      ep = arr[i]
    }
  }
  return count
}

// c: 말의 마리수 , arr: 마구간들 각각의 좌표, 중복 없음. (수직선상에 위치함)
function solution(c: number, arr: number[]) {
  // 구해야 하는 것 : 가장 가까운 두 말의 최대거리

  arr.sort((a, b) => a - b)
  let lt = 1
  let rt = arr[arr.length - 1]

  let nearest = lt
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2)

    if (count(arr, mid) >= c) {
      nearest = mid
      lt = mid + 1
    } else {
      rt = mid - 1
    }
  }

  return nearest
}

export { solution as decisionTree2 }
