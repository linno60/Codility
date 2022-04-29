function solution(A) {
    let res = 0
    let count = 0

    // if A[i] === 0, count++;
    // if A[i] === 1, increase current res by count
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            count++
        } else {
            res += count
        }
    }

    return (res > 1000000000) ? -1 : res
}
