function solution(A, K) {
    let res = []
    const k = K % A.length

    for (let i = 0; i < A.length; i++) {
        if (i + k >= A.length) {
            res[i + k - A.length] = A[i]
        } else {
            res[i + k] = A[i]
        }
    }

    return [...res]
}