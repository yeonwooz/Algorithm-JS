/*
<Binary Search and Sort>
*/

// 5 <= n <= 100
// 120 <= each element of heights <= 180

// 1 2 3 4 5 6 7 8 9

// 1 2 8 4 5 6 7 3 9
// 1 3 2 4 5 6 7 8 9

function solution(n: number, heights: number[]) {
  let tallHeight
  let tallHeightIndex
  let shortHeight
  let shortHeightindex
  let i = 0
  while (i < n / 2) {
    if (heights[i] > heights[i + 1]) {
      tallHeight = heights[i]
      tallHeightIndex = i
      break
    }
    i++
  }

  if (!tallHeight) {
    i = n / 2
    while (i < n - 1) {
      if (heights[i] > heights[i + 1]) {
        tallHeight = heights[i]
        tallHeightIndex = i
        break
      }
      i++
    }
  }

  i = heights.indexOf(tallHeight) + 1
  while (i < n - 1) {
    if (heights[i] > heights[i + 1]) {
      shortHeight = heights[i + 1]
      shortHeightindex = i + 1
      break
    }
    i++
  }

  return [tallHeightIndex + 1, shortHeightindex + 1]
}

export { solution as binarySearchSort }
