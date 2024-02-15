function solution(arr) {
    var answer = [];
    let a = Math.min(...arr)
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== a) answer.push(arr[i])
    }
    return (answer.length === 0) ? [-1] : answer;
}