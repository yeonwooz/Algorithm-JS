function removeChars(arr) {
  // 비허용 문자 제거
  const reg = new RegExp(/^[a-z0-9-_.]+$/)

  for (let i = arr.length - 1; i >= 0; --i) {
    if (reg.test(arr[i])) {
      continue
    } else {
      arr.splice(i, 1)
    }
  }
}

function solution(new_id) {
  //1
  let answer = new_id.toLowerCase().split('')

  //2
  removeChars(answer)

  //3
  for (let i = answer.length - 1; i >= 1; --i) {
    if (answer[i - 1] === '.' && answer[i] === '.') {
      answer.splice(i, 1)
    }
  }

  //4 => if/else 쓰지 않도록 주의;;;
  if (answer[0] === '.') {
    answer.splice(0, 1)
  }

  if (answer[answer.length - 1] === '.') {
    answer.splice(answer.length - 1, 1)
  }

  //5
  if (answer.length === 0) {
    answer.push('a')
  }

  //6
  if (answer.length >= 16) {
    answer.splice(15, answer.length - 15)
    for (let i = answer.length - 1; i >= 0; --i) {
      if (answer[answer.length - 1] === '.') {
        answer.splice(answer.length - 1, 1)
      }
    }
  }

  // 7
  if (answer.length <= 2) {
    const lastChar = answer[answer.length - 1]
    let i = 0
    while (i <= 3 - answer.length) {
      answer.push(lastChar)
      ++i
    }
  }

  return answer.join('')
}
