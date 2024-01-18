function solution(s) {
    var answer = '';
    let a = s.split(" ").map(e => e.charAt(0).toUpperCase() + e.substring(1).toLowerCase())
    return a.join(" ");
}