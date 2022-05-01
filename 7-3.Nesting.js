function solution(S) {
    let stack = []

    if (S.length === 0) {
        return 1
    } else if (S.length === 1) {
        return 0
    } else {
        for (let i = 0; i < S.length; i++) {
            if (S[i] === '(') {
                stack.push(S[i])
            } else {
                if (stack.pop() !== '(') {
                    return 0
                }
            }
        }
    }

    return (stack.length === 0 ? 1 : 0)
}
