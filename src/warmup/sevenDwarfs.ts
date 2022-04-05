/*
 Q. Sum of the seven dwarfs' heights is 100.
 Among the nine numbers given as parameters, find the seven dwarfs' heights
 and return them in the order the came in.
 */

function solution(arr: number[]) {
  const sumOfNine = arr.reduce((prev, cur) => prev + cur, 0)

  let sum = sumOfNine
  const heights = arr.slice()

  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (i !== j && sum - (arr[i] + arr[j]) === 100) {
        heights.splice(j, 1)
        heights.splice(i, 1)

        return heights
      }
    }
  }
}

export { solution as sevenDwarfs }
