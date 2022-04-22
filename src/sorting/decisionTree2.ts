// count: 말의 마리수 , arr: 마구간들 각각의 좌표, 중복 없음. (수직선상에 위치함)
function solution(count: number, arr: number[]) {
  // 구해야 하는 것 : 가장 가까운 두 말의 최대거리

  arr.sort((a, b) => a - b)
  let diffs = []
  for (let i = 0; i < arr.length - 1; ++i) {
    diffs.push(Math.abs(arr[i] - arr[i + 1]))
  }
  let lt = Math.min(...diffs)
  let rt = Math.max(...diffs)

  let nearestLength = lt
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2)

    if (nearestLength <= mid) {
      nearestLength = mid
      rt = mid - 1
    } else {
      lt = mid + 1
    }
  }

  return nearestLength
}

export { solution as decisionTree2 }
