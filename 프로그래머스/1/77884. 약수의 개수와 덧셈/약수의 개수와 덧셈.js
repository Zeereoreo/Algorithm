function solution(left, right) {
    var answer = 0;
    let arr = [];
    for(let i = left; i<= right; i++){
        for(let j = 1; j<=i; j++){
            if(i%j === 0){
                arr.push(j)
            }
        }
        if(arr.length%2 === 0){
            answer += i
            arr = [];
        }else {
            answer -= i
            arr = [];
        }
    }
    return answer;
}