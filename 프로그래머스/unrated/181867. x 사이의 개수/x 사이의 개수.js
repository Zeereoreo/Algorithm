function solution(myString) {
    var answer = [];
    let a = myString.split("x");
    return a.map(el => el.length);
}