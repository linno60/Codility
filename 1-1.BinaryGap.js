function solution(N) {
    const binN = N.toString(2)
    let currGap = 0
    let gaps = []

    for (let i = 0; i < binN.length; i++) {
        if (binN[i] === "0") {
            currGap++
            if (binN[i + 1] === "1") {
                gaps.push(currGap)
                currGap = 0
            }
        }
    }
    return gaps.length >= 1 ? Math.max(...gaps) : 0
}