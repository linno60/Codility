function solution(N) {
    let count = 0

    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            if (i === Math.sqrt(N)) count++
            else count += 2
        }
    }

    return count
}

// console.log(solution(100))