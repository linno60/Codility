function solution(A, B, K) {
    return (parseInt(B / K) - parseInt(A / K) + ((A % K === 0) ? 1 : 0))
}