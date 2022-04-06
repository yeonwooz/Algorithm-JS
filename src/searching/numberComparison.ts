function solution(count: number, array: number[]): number[] {
  const answer: number[] = []
  for (let i = 0; i < count; ++i) {
    if (i === 0 || array[i] > array[i - 1]) {
      answer.push(array[i])
    }
  }

  return answer
}

export { solution as numberComparison }
