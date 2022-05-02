function solution(A) {
    // find leader
    let obj = {}
    let leader = undefined
    let count = 0

    if (A.length < 2) {
        return 0
    }

    for (let i = 0; i < A.length; i++) {
        if (Array.isArray(obj[A[i]])) {
            obj[A[i]].push(i)
        } else {
            obj[A[i]] = [i]
        }
    }
    // console.log(obj)

    for (const [key, value] of Object.entries(obj)) {
        if (value.length > A.length / 2) {
            leader = key
        }
    }
    // console.log('leader is ', leader)

    if (leader === undefined) {
        return 0
    } else {
        let indexes = obj[leader]
        let left = 0
        let right = 0
        // console.log('indexes are ', indexes)

        for (let i = 0; i < A.length; i++) {
            if (A[i] == leader) {
                left++
                right = indexes.length - left
            }
            if (left > Math.floor((i + 1) / 2) && right > Math.floor((A.length - i - 1) / 2)) {
                count++
            }
        }
        // console.log(count)
    }
    return count
}

// solution([4, 4, 2, 5, 3, 4, 4, 4])
