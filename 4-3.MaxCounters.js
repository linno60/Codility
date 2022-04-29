// Only 75% right now, need to optimize later

function solution(N, A) {
    let res = Array(N).fill(0)
    let maxCounter = 0

    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 1 && A[i] <= N) {
            res[A[i] - 1]++
            maxCounter = Math.max(maxCounter, res[A[i] - 1])
        } else if (A[i] === N + 1) {
            res.fill(maxCounter)
        }
    }
    return [...res]
}
