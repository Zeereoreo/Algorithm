function solution(myString) {
    var answer = '';
    let a = "abcdefghijklmnopqrstuvwxyz"
    return [...myString].map((el) => {
        if(a.indexOf("l") > a.indexOf(el)) return "l"
        else return el
    }).join("")
}