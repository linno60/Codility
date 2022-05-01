function solution(A) {
    // An = avg of n numbers
    // Bm = avg of m numbers
    // avg(m+n) = (n * An + m * Bm) / (n + m)
    // if extending A to have the numbers in B lead to a
    // smaller avg, eg: (n * An + m * Bm) / (n + m) < An
    // then Bm < An => Bm is the slice having smallest avg

    let min = Number.MAX_SAFE_INTEGER
    let tempAvg = 0
    let res = 0

    for (let i = 0; i < A.length - 1; i++) {
        tempAvg = (A[i] + A[i + 1]) / 2
        if (tempAvg < min) {
            min = tempAvg
            res = i
        }
    }

    for (let j = 0; j < A.length - 2; j++) {
        tempAvg = (A[j] + A[j + 1] + A[j + 2]) / 3
        if (tempAvg < min) {
            min = tempAvg
            res = j
        }
    }

    return res
}

// console.log(solution([4, 2, 2, 5, 1, 5, 8]))

