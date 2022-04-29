/*
2019 KAKAO BLIND
*/

function solution(N, stages) {
    const countOfChallengers = new Map()      // key는 1단계부터 시작
    const countOfCurrentFighter = new Map()
    
    // 단계별 도달한 플레이어의 수
    for (let i = 0; i < stages.length; ++i) {
        // stages[i] = 2 -> 1, 2 추가
        for (let j = 1; j <= stages[i]; ++j) {
            if (j > N) {
                continue
            }
            if (!countOfChallengers.has(j)) {
                countOfChallengers.set(j, 1)
            } else {
                countOfChallengers.set(j, countOfChallengers.get(j)+1)
            }
        }  
        
        
        // 단계별 아직 클리어하지 못한 플레이어의 수
        if (stages[i] > N) {
            continue
        }
        
        if (!countOfCurrentFighter.has(stages[i])) {
            countOfCurrentFighter.set(stages[i], 1)
        } else {
            countOfCurrentFighter.set(stages[i], countOfCurrentFighter.get(stages[i])+1)
        }
    }
    
    // console.log(countOfChallengers, countOfCurrentFighter)
    let failRatios = new Map()
    for (let i = 1; i <= N; ++i ) {
        if (!countOfCurrentFighter.has(i)) {
            failRatios.set(i, 0)
        } else {
            failRatios.set(i,countOfCurrentFighter.get(i) / countOfChallengers.get(i) )
        }
    }
    
    const failArray = [...failRatios]
    const sortedArray = failArray.sort((a,b) => {
        return b[1] - a[1]
    }).map(item => item[0])
    
    return sortedArray
}