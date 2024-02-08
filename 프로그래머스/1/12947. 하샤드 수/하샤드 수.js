function solution(x) {
    var answer = true;
    let n = 0;
    n = String(x).split("").reduce((a,c) => a +(+c),0)
    return x%n === 0 ? true : false;
}