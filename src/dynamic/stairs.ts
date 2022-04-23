/*
<Dynamic Programming>

Q. Get the number of ways to go upstairs through 'n' stairs. 
For each step you can go one or two stairs at once.
*/

function solution(n: number) {
  // when pass every third step
  const countOfThird = Math.floor(n / 3)
  const countOfThirdRest = n % 3

  const waysToFinishByThird = countOfThird * 3
  let totalWays = waysToFinishByThird
  if (countOfThirdRest === 1) {
    totalWays += 1
  } else if (countOfThirdRest === 2) {
    totalWays += 2
  }

  // when not passing every third step
  const countOfSecond = Math.floor(n / 2)
  const countOfSecondRest = n % 2
  const waysToFinishBySecond = countOfSecond
  totalWays += waysToFinishBySecond + countOfSecondRest

  const countOfSixth = Math.floor(n / 6)
  const countOfSecondSi = n % 2

  totalWays -= countOfSixth
  return totalWays
}

export { solution as stairs }
