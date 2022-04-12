/*
Q. Figure out the candidate who got the most papers.
*/

type Result = {
  [key: string]: number
}

function solution1(papers: string, candidates: string[]): string {
  const results: Result = {}

  for (let candidate of candidates) {
    results[candidate] = 0
  }

  for (let paper of papers) {
    results[paper]++
  }

  let elected = 'A'

  for (let result in results) {
    if (results[result] > results[elected]) {
      elected = result
    }
  }

  return elected
}

function solution2(chosenCandidates: string, candidates: string[]): string {
  const results = new Map<string, number>()

  for (let chosenCandidate of chosenCandidates) {
    if (!results.has(chosenCandidate)) {
      results.set(chosenCandidate, 1)
    } else {
      const prevVote = results.get(chosenCandidate)
      results.set(chosenCandidate, prevVote + 1)
    }
  }

  let elected

  let max = Number.MIN_SAFE_INTEGER
  for (let [key, value] of results) {
    if (value > max) {
      max = value
      elected = key
    }
  }

  return elected
}

export { solution2 as vote }
