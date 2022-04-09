/*
Q. For the elements of the array given as a parameter, 
figure out if the number is a prime number when each place value are reversed.

(each number is bigger than zero and less smaller than 100,000)
*/

// count is same as or bigger than 3 and same as or smaller than 100
function solution(count: number, arr: number[]): number[] {
  const primes: number[] = []

  arr.forEach((number) => {
    const reversedNum = parseInt(number.toString().split('').reverse().join(''))
    let isPrime = true
    let i = 2
    while (i < reversedNum) {
      if (reversedNum % i == 0) {
        isPrime = false
        break
      }
      ++i
    }

    if (reversedNum > 1 && isPrime) {
      primes.push(reversedNum)
    }
  })
  return primes
}

// string 변환없이 자릿수를 이용하여 숫자를 뒤집는 방법
function solution2(count: number, arr: number[]): number[] {
  const primes: number[] = []

  for (let num of arr) {
    let isPrime = true

    let newNum = 0 // -> 2
    while (num) {
      // num : 62   -> 6
      const res = num % 10 // res : 2   -> 6
      newNum = newNum * 10 + res // newNum : 2  ->  26
      num = Math.floor(num / 10) // num : 6 -> 0
    }

    let i = 2
    while (i < Math.floor(newNum / 2)) {    // 약수쌍이므로 나머지 반은 안 돌아도 됨
      if (newNum % i == 0) {
        isPrime = false
        break
      }
      ++i
    }

    if (newNum > 1 && isPrime) {
      primes.push(newNum)
    }
  }

  return primes
}

export { solution2 as getPrimeNumbers }
