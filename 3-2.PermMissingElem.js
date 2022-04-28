function solution(A) {
    // recall Gauss Formula: sum of [1...n] is (1+n)*n/2
    // in this case, the sum of [1...(N+1)] is (1+N+1)*(N+1)/2
    // the missing element is the difference between sum of [1...(N+1)] and sum of [1...N]
    // hence what we are looking for is: sum[1...(N+1)]-sum[1...N]

    const len = A.length
    if (len < 1) { return 1 }
    const ordinarySum = (1 + len + 1) * (len + 1) / 2
    const actualSum = A.reduce((a, b) => a + b)

    return ordinarySum - actualSum
}
