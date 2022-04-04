function solution(a,b,c) {
    let min = a
    if (a > b) {
        min = b
    }
    if (min > c) {
        min = c
    }

    return min
}

export { solution as min }