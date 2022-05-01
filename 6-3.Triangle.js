function solution(A) {
    A.sort((a, b) => a - b)

    if (A.length < 3) {
        return 0
    }

    for (let i = 0; i < A.length - 2; i++) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            if (A[i] + A[i + 2] > A[i + 1] && A[i + 1] + A[i + 2] > A[i]) {
                return 1
            }
        }
    }

    return 0
}

// console.log(solution([10, 2, 5, 1, 8, 20]))
// console.log(solution([10, 50, 5, 1]))
