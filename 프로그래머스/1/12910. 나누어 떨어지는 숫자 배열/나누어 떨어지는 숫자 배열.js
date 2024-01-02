function solution(arr, divisor) {
    var answer = [];
    arr.sort((a,b) => a-b);
    arr.map((el) => {
        if(el%divisor === 0){
            answer.push(el)
        }
    })
    if(answer.length === 0) return [-1]
    return answer;
}