function solution(A, B) {
    let count = 0
    let stack = []

    if (A.length === 0) {
        return 0
    } else if (A.length === 1) {
        return 1
    } else {
        for (let i = 0; i < A.length; i++) {
            if (B[i] === 1) {
                stack.push(A[i])
            } else {
                if (stack.length === 0) {
                    count++
                } else {
                    while (A[i] > stack[stack.length - 1] && stack.length > 0) {
                        stack.pop()
                    }
                    if (stack.length === 0) {
                        count++
                    }
                }
            }
        }
        // console.log('count ', count)
        // console.log('stack ', ...stack)
        return count + stack.length
    }
}

// console.log(solution([4, 3, 2, 1, 5, 7], [0, 1, 1, 1, 0, 0]))