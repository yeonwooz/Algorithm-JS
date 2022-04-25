function solution(numbers, hand) {
  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] === 0) {
      numbers[i] = 11
    }
  }

  /*
    0 -> 11
    가운데x 를 기준으로 1차이가 나거나, 3차이가 나면 거리 1
    가운데x 를 기준으로 2차이가 나거나, 4차이가 나거나 6차이가 나면 거리 2
    가운데x 를 기준으로 5차이가 나거나, 7차이가 나거나 9차이가 나면 거리 3
    가운데x 를 기준으로 8차이가 나거나, 10차이가 나면 거리 4

    */

  const lbs = [1, 4, 7]
  const rbs = [3, 6, 9]
  const mbs = [2, 5, 8, 0]
  const handChar = { left: 'L', right: 'R' }

  let answer = ''
  let lastLb
  let lastRb

  for (let i = 0; i < numbers.length; ++i) {
    if (lbs.includes(numbers[i])) {
      answer += 'L'
      lastLb = numbers[i]
    } else if (rbs.includes(numbers[i])) {
      answer += 'R'
      lastRb = numbers[i]
    } else {
      if (i === 0) {
        answer += handChar[hand]
      } else {
        // 가운데를 눌렀을 때
        let lNumDiff = Math.abs(numbers[i] - lastLb)
        let rNumDiff = Math.abs(numbers[i] - lastRb)
        let lDistance = 0
        let rDistance = 0

        if ([1, 3].includes(lNumDiff)) {
          lDistance = 1
        } else if ([2, 4, 6].includes(lNumDiff)) {
          lDistance = 2
        } else if ([5, 7, 9].includes(lNumDiff)) {
          lDistance = 3
        } else if ([8, 10].includes(lNumDiff)) {
          lDistance = 4
        }

        if ([1, 3].includes(rNumDiff)) {
          rDistance = 1
        } else if ([2, 4, 6].includes(rNumDiff)) {
          rDistance = 2
        } else if ([5, 7, 9].includes(rNumDiff)) {
          rDistance = 3
        } else if ([8, 10].includes(rNumDiff)) {
          rDistance = 4
        }

        if (lDistance === rDistance) {
          answer += handChar[hand]
        } else if (lDistance < rDistance) {
          answer += handChar['left']
        } else {
          answer += handChar['right']
        }
      }
    }
  }

  return answer
}
