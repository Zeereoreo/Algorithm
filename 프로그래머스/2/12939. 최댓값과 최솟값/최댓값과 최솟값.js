function solution(s) {
    var answer = [];
    let a = s.split(" ");
    let max = Math.max(...a)
    let min = Math.min(...a)
    
    return `${min} ${max}`;
}