function solution(binomial) {
    var answer = 0;
    let arr = binomial.split(" ")
    let [a,op,b] = arr
    if(op === "+") return Number(a) + Number(b)
    else if(op === "-") return Number(a) - Number(b)
    else if(op === "*") return Number(a) * Number(b)
}