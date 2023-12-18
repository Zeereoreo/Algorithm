function solution(x) {
    var answer = true;
    let X = String(x)
    let a = 0;
    for(let i = 0; i<X.length; i++){
        a += +X[i];
    }
    return (x%a === 0) ? true : false
}