/*
Q. 카카오 2019 겨울 인턴십 문제 - 크레인 인형뽑기 / stack
https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
*/

function solution(board: number[][], moves: number[]): number {
    let answer = 0
    // board 이차원배열은 위쪽부터 아래로 가로배열들의 배열
  
    const dollsStack = []
    let topDollInStack = 0
  
    let i = 0
    while (i < moves.length) {
      const pickedLineIndex = moves[i] - 1
      for (let j = 0; j < board.length; ++j) {
        const targetDoll = board[j][pickedLineIndex]
  
        if (targetDoll > 0) {
          if (topDollInStack === targetDoll) {
            answer++
            dollsStack.pop()
            topDollInStack = dollsStack[dollsStack.length - 1]
          } else {
            dollsStack.push(targetDoll)
            topDollInStack = targetDoll
          }
  
          board[j][pickedLineIndex] = 0
          break
        }
      }
  
      ++i
    }
  
    return answer * 2
    // 여기서 많이 시간을 소요했다.
    // 두개가 같이 사라지므로 두배를 해야 한다.
  }
  
  export { solution as getRemovedDollsCount }
  