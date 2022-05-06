/*
괄호변환문제
*/

function isRight(p) {
  let balance = 0

  for (let i = 0; i < p.length; ++i) {
    if (p[i] === '(') {
      balance += 1
    } else {
      if (balance > 0) {
        balance -= 1
      }
    }
  }

  return balance === 0
}

function solution(p) {
  if (p.length === 0) {
    return ''
  }

  if (isRight(p)) {
    return p
  }

  let balance = 0
  let u = ''
  let v = ''

  for (let i = 0; i < p.length; ++i) {
    if (p[i] === '(') {
      balance += 1
    } else {
      balance -= 1
    }

    if (i > 0 && balance === 0) {
      u = p.substring(0, i + 1)
      v = p.substring(i + 1)
      break
    }
  }

  if (isRight(u)) {
    return solution(v)
  }

  let str = '(' + solution(v) + ')'

  u = u.replace(u[0], '')
  u = u.replace(u[u.length - 1], '')

  let newU = ''
  for (let char of u) {
    if (char === '(') {
      newU += ')'
    } else {
      newU += '('
    }
  }

  str += newU
  return v + str
}
