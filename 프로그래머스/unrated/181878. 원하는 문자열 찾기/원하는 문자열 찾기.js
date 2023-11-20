function solution(myString, pat) {
    var answer = 0;
    let a = myString.toLowerCase();
    let b = pat.toLowerCase();
    return a.includes(b) ? 1 : 0
}