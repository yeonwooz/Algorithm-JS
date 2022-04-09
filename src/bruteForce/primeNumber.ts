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

export { solution as getPrimeNumbers }
