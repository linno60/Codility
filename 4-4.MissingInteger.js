function solution(A) {
    let res = []

    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            res[A[i] - 1] = A[i]
        }
    }

    for (let j = 0; j < res.length; j++) {
        if (typeof (res[j]) === 'undefined') {
            return j + 1
        } else if (j === res.length - 1 && typeof (res[j]) !== 'undefined') {
            return res.length + 1
        }
    }

    return 1
}
