/*
Get the count of ways to make a target number with given numbers using plus or minus
*/

function solution(numbers, target) {
    // 1.더하거나 빼는 식을 구한 후, 배치순서가 다르게 하는 경우의 수를 곱한다 => 보류
    
    // 2.DFS => OK
    // 방문한 점의 인덱스를 스택에 넣는다
    // 다음 점에 방문한다 (값 더하기, 값 빼기 각각의 경우 만들기)
    // 최종 계산값이 target과 같다면 +1
    
    let cnt = 0         // 경우의 수
    let originalResult = 0      // target과 비교될 값
    const stack = []
    
    function recursive(v, result) {
        const lastIdx = numbers.length -1
        if (v === lastIdx) {
            if (result + numbers[lastIdx] === target) {
                cnt++
            } else if (result - numbers[lastIdx] === target) {
                cnt++
            }
            stack.pop()
            return
        }  
        
        stack.push(v)
 
        const plusResult = result + numbers[v]
        recursive(v+1, plusResult)     
        stack.pop()

        const minusResult = result - numbers[v]
        recursive(v+1, minusResult)
        stack.pop()
    }
    
    stack.push(0)
    recursive(0, originalResult)
    
    return cnt
    
}