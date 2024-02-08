function solution(arr) {
    var answer = 0;
    let acc = 0;
    for(let i = 0; i<arr.length; i++){
        acc += arr[i]
        answer = acc/arr.length;
    }
    return answer;
}