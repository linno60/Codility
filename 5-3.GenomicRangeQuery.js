function solution(S, P, Q) {
    let res = []

    for (let i = 0; i < P.length; i++) {
        let temp = S.slice(P[i], Q[i] + 1)
        // console.log(temp)
        if (temp.includes('A')) {
            res.push(1)
        } else if (!temp.includes('A') && temp.includes('C')) {
            res.push(2)
        } else if (!temp.includes('A') && !temp.includes('C') && temp.includes('G')) {
            res.push(3)
        } else if (!temp.includes('A') && !temp.includes('C') && !temp.includes('G') && temp.includes('T')) {
            res.push(4)
        }
    }
    // console.log(...res)

    return res
}

// console.log(solution('TC', [0, 0, 1], [0, 1, 1]))