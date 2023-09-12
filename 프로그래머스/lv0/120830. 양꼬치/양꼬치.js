function solution(n, k) {
    if (n >= 10)
    return 12000*n+2000*k - (Math.floor(n/10) * 2000)
    else if (n < 10)
    return 12000*n+2000*k

}