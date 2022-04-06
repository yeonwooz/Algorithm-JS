/*
Q. return the biggest sum of digits of each number.

* sum of digits : 자릿수의 합, 각 자리의 수 (figure)를 더한 값
예) 123 -> 1 + 2 + 3 = 6
*/

function getSum(num: number) {
  let sum = 0
  const strNum = num.toString()
  if (strNum.length === 0) {
    return sum
  }

  for (let i = 0; i < strNum.length; ++i) {
    sum += parseInt(strNum[i])
  }

  return sum
}

function solution(count: number, array: number[]): number {
  let maxSum = getSum(array[0])
  let biggestNum = array[0]

  // foreach 는 중간에 break가 불가능
  //   array.forEach((num) => {
  //     if (num !== biggestNum && maxSum === getSum(num)) {
  //       console.log(num, biggestNum)
  //       return Math.max(biggestNum, num)
  //     } else if (maxSum < getSum(num)) {
  //       maxSum = getSum(num)
  //       biggestNum = num
  //     }
  //   })

  for (let i = 0; i < array.length; ++i) {
    const num = array[i]
    if (num !== biggestNum && maxSum === getSum(num)) {
      return Math.max(biggestNum, num)
    } else if (maxSum < getSum(num)) {
      maxSum = getSum(num)
      biggestNum = num
    }
  }

  return biggestNum
}

export { solution as sumOfDigits }
