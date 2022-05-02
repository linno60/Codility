function solution(A) {
    let res = A[0]
    let currSum = 0

    for (let i = 0; i < A.length; i++) {
        currSum += A[i]
        if (A[i] > currSum) {
            currSum = A[i]
        }
        if (currSum > res) {
            res = currSum
        }
    }

    return res
}

console.log(solution([3, -2, 3]))