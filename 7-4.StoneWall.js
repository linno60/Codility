function solution(H) {
    let count = 0
    let stack = []

    for (let i = 0; i < H.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
            stack.pop()
        }
        if (stack.length > 0 && stack[stack.length - 1] === H[i]) {
            continue
        } else {
            count++
            stack.push(H[i])
        }
    }

    return count
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]))