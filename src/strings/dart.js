/*
Kakao 2018 Blind
*/

function solution(dartResult) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const chars = ['S', 'D', 'T']
  const options = ['*', '#']

  const scoreMapArr = []

  for (let i = 1; i < dartResult.length; ++i) {
    if (chars.includes(dartResult[i])) {
      let num = dartResult[i - 1]
      if (num === '0' && dartResult[i - 2] === '1') {
        num = 10
      }

      const bonus = dartResult[i]
      let option = ''
      if (options.includes(dartResult[i + 1])) {
        option = dartResult[i + 1]
      }
      const scoreSet = num.toString() + bonus + option
      const scoreMap = new Map()
      scoreMap.set('num', num)
      scoreMap.set('bonus', bonus)
      scoreMap.set('option', option)
      scoreMap.set('scores', parseInt(num))

      scoreMapArr.push(scoreMap)
    }
  }
  console.log(scoreMapArr)

  for (let scoreMap of scoreMapArr) {
    switch (scoreMap.get('bonus')) {
      case 'S':
        scoreMap.set('scores', scoreMap.get('scores'))
        break

      case 'D':
        scoreMap.set('scores', Math.pow(scoreMap.get('scores'), 2))
        break

      case 'T':
        scoreMap.set('scores', Math.pow(scoreMap.get('scores'), 3))
        break
    }

    switch (scoreMap.get('option')) {
      case '*':
        const idx = scoreMapArr.findIndex((item) => item === scoreMap)

        if (idx === 0) {
          scoreMapArr[0].set('scores', scoreMapArr[0].get('scores') * 2)
        } else {
          scoreMapArr[idx].set('scores', scoreMapArr[idx].get('scores') * 2)
          scoreMapArr[idx - 1].set(
            'scores',
            scoreMapArr[idx - 1].get('scores') * 2
          )
        }
        break

      case '#':
        scoreMap.set('scores', scoreMap.get('scores') * -1)
        break
    }
  }

  // console.log(scoreMapArr)
  const finalScore =
    scoreMapArr[0].get('scores') +
    scoreMapArr[1].get('scores') +
    scoreMapArr[2].get('scores')
  return finalScore
}
