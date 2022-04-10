/*
Q. Concat two arrays given as parameters in ascending order.
(Two arrays are sorted in ascending order)
*/

// using sort method
function solution1(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2).sort()
}

// without sort method
function solution2(arr1: number[], arr2: number[]): number[] {
  for (let i = 0; i < arr1.length; ++i) {
    for (let j = 0; j < arr2.length; ++j) {}
  }
  return []
}

export { solution1 as concatArrays }
