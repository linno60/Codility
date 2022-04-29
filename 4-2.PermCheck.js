function solution(A) {
    let max = Number.MIN_SAFE_INTEGER

    // find the maximum number in the array
    for (let i = 0; i < A.length; i++) {
        max = Math.max(A[i], max)
    }

    // if max number !== length of array, not a perm
    if (max !== A.length) {
        return 0
    }

    let res = Array(max).fill(0)

    for (let i = 0; i < A.length; i++) {
        res[A[i] - 1]++
    }

    if (res.indexOf(0) !== -1) {
        return 0
    } else {
        return 1
    }
}
