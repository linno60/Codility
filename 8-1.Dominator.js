function solution(A) {
    let obj = {}

    if (A.length === 0) {
        return -1
    } else if (A.length === 1) {
        return 0
    } else {
        for (let i = 0; i < A.length; i++) {
            if (Array.isArray(obj[A[i]])) {
                obj[A[i]].push(i)
            } else {
                obj[A[i]] = [i]
            }
        }
    }

    // console.log(obj)

    for (const [key, value] of Object.entries(obj)) {
        if (value.length > A.length / 2) {
            return value[0]
        }
    }

    return -1
}

// console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]))