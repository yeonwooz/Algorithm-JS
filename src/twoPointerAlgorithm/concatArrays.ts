/*
Q. Concat two arrays given as parameters in ascending order.
(Two arrays are sorted in ascending order)
*/

// using sort method    -> tc: O(nLogn)
function solution1(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2).sort()
}

// without sort method  -> tc: O(n+m)
function solution2(arr1: number[], arr2: number[]): number[] {
  const merged: number[] = []
  const n = arr1.length
  const m = arr2.length
  let p1 = 0
  let p2 = 0
  // Do not visit the index which has already been pushed into the 'merged' array

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      merged.push(arr1[p1++])
    } else {
      merged.push(arr2[p2++])
    }
  }

  while (p1 < n) {
    merged.push(arr1[p1++])
  }

  while (p2 < m) {
    merged.push(arr2[p2++])
  }

  return merged
}

export { solution2 as concatArrays }
