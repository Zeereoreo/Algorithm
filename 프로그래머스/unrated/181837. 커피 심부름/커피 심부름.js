function solution(order) {
    var answer = 0;
    let a = 0;
    let b = 0;
    order.filter((el) => {
        if(el.includes("americano")){
            a++
        }else if(el.includes("cafelatte")){
            b++
        }else {
            a++
        }
        answer = (a*4500) + (b*5000)
    })
    return answer;
}