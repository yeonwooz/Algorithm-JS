/*
Q. Figure out the candidate who got the most papers.
*/

type Result = {
  [key: string]: number
}

function solution(papers: string, candidates: string[]) {
  const results: Result = {}

  for (let candidate of candidates) {
    results[candidate] = 0
  }

  for (let paper of papers) {
    results[paper]++
  }

  console.log(333333, results)

  let elected = 'A'

  for (let result in results) {
      if (results[result] > results[elected]) {
        elected = result
      }
  }

  return elected
}

export { solution as vote }
