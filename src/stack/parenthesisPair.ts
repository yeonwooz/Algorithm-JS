/*
Q. Check if the given parenthesis are in right pairs and orders
*/
enum EAnswer {
  YES = 'YES',
  NO = 'NO',
}

function solution(parenthesis: string): EAnswer {
  const totalCount = parenthesis.length

  if (totalCount % 2 > 0) {
    return EAnswer.NO
  }

  const openings = []

  let i = 0
  while (i < totalCount) {
    if (parenthesis[i] === '(') {
      openings.push(parenthesis[i])
    } else {
      if (openings.length === 0) {
        return EAnswer.NO
      }
      openings.pop()
    }

    ++i
  }

  return openings.length === 0 ? EAnswer.YES : EAnswer.NO
}

export { solution as checkParenthesisPairs }
