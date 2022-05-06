function solution(N) {
    let factors = []
    let diff = Number.MAX_SAFE_INTEGER
    let res = []

    if (N.length === 1) return 4

    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            factors.push(i)
        }
    }

    for (let j = 0; j < factors.length; j++) {
        if (N / factors[j] - factors[j] < diff) {
            diff = N / factors[j] - factors[j]
            res[0] = factors[j]
            res[1] = N / factors[j]
        }
    }

    return (res[0] + res[1]) * 2
}

console.log(solution(30))