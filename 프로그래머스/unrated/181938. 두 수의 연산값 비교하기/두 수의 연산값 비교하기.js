function solution(a, b) {
    let c = Number(String(a) + String(b));
    let d = 2 * a * b
    return c > d ? c : d
}