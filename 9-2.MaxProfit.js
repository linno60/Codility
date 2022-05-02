function solution(A) {
    let min = Number.MAX_SAFE_INTEGER
    let max = 0

    for (let i = 0; i < A.length; i++) {
        min = Math.min(min, A[i])
        max = Math.max(max, A[i] - min)
    }

    return max
}

// console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]))