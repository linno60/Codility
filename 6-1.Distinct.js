function solution(A) {
    let res = {}

    for (let i = 0; i < A.length; i++) {
        res[A[i]] = true
    }

    return Object.keys(res).length
}

// console.log(solution([2, 3, 1, -5, 1]))