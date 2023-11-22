function solution(myString, pat) {
    var answer = '';
    let a = myString.lastIndexOf(pat)
    let b = myString.slice(0,a+pat.length)
    return b;
}