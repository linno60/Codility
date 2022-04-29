function solution(X, A) {
    let res = []
    let count = 0

    for (let i = 0; i < A.length; i++) {
        // count the number of different leaves, if is equals to X, return
        if (typeof (res[A[i]]) === 'number') {
            continue
        } else {
            res[(A[i])] = A[i]
            count++
        }
        if (count === X) {
            return i
        }
    }
    return -1
}