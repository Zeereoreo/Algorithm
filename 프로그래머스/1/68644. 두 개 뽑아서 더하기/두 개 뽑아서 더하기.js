function solution(numbers) {
    var answer = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){
        let a = numbers[i]
        let b = numbers[j]
        if(!answer.includes(a+b)) answer.push(a+b)
        }
    
    }
    return answer.sort((a,b) => a-b);
}