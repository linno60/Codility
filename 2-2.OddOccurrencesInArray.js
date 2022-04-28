function solution(A) {
    A.sort()
    let res = []

    for (let i = 0; i < A.length; i++) {
        if (res.includes(A[i])) {
            res.pop()
        } else {
            res.push(A[i])
        }
    }

    return res[0]
}