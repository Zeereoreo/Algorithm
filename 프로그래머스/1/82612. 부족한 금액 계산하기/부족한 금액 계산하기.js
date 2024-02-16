function solution(price, money, count) {
    var answer = 0;
    let a = 0;
    for(let i = 1; i<=count; i++){
        a += price * i
    }
    return a <= money ? 0 : a - money;
}