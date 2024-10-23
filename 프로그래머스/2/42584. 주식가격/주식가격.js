function solution(prices) {
    var answer = [];
 
    for(let i = 0; i<prices.length; i++){
        let a = 0;
        for(let j = i + 1; j<prices.length; j++){
            a++
            if(prices[i] > prices[j]){
                break;
            }
        }

        answer.push(a)
    }
    return answer;
}