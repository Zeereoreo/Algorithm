function solution(n) {
    
    let N = Math.sqrt(n)
    return Number.isInteger(N) ? (N+1)*(N+1) : -1
}