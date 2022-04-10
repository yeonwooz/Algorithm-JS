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
  let merged: number[] = []

  // Do not visit the index which has already been pushed into the 'merged' array
  //   for (let i = 0; i < arr1.length; ++i) {
  //     for (let j = 0; j < arr2.length; ++j) {
  //       if (arr1[i] <= arr2[j]) {
  //         merged.push(arr1[i])
  //         merged.push(arr2[j])
  //         break
  //       }
  //     }
  //   }

  if (arr1[0] < arr2[0]) {
    let i = 0
    while (i < arr1.length) {
      let j = 0
      while (j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
          if (i === arr1.length - 1) {
            merged.push(arr1[i])
            merged = merged.concat(arr2.slice(j))
          } else {
            merged.push(arr1[i])
            merged.push(arr2[j])
          }

          break
        }

        ++j
      }
      ++i
    }
  } else {
    //   if (arr1[0] >= arr2[0])
    let i = 0
    while (i < arr2.length) {
      let j = 0
      while (j < arr1.length) {
        if (arr2[i] <= arr1[j]) {
          if (i === arr2.length - 1) {
            merged.push(arr2[i])
            merged = merged.concat(arr1.slice(j))
          } else {
            merged.push(arr2[i])
            merged.push(arr1[j])
          }
        }

        ++j
      }
      ++i
    }
  }

  return merged
}

export { solution2 as concatArrays }
