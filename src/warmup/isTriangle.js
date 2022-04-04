function solution(a,b,c) {
    let max = a
    let sum = a + b + c

    if (a < b) {
        max = b
    }

    if (max < c) {
        max = c
    }

    return (sum - max) > max ? "YES" : "NO"
}

export { solution as isTriangle }