function solution(A) {
    let minDiff = Number.MAX_SAFE_INTEGER
    const addUp = A.reduce((a, b) => a + b)
    let firstSum = 0
    let secondSum = 0

    for (let i = 0; i < A.length - 1; i++) {
        firstSum += A[i]
        secondSum = addUp - firstSum
        minDiff = Math.min(minDiff, Math.abs(secondSum - firstSum))
    }

    return minDiff
}

console.log(solution([0, 2000]))