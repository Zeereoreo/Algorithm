function solution(answers) {
    var answer = [];
    let a = 0;
    let b = 0;
    let c = 0;
    let first = [1,2,3,4,5];
    let second = [2,1,2,3,2,4,2,5];
    let third = [3,3,1,1,2,2,4,4,5,5];
    
    for (let i = 0; i<answers.length; i++){
        if(answers[i] === first[i%first.length]) a++
        if(answers[i] === second[i%second.length]) b++
        if(answers[i] === third[i%third.length]) c++
    }
    
    let max = Math.max(a,b,c);
    
    if(a === max) answer.push(1);
    if(b === max) answer.push(2);
    if(c === max) answer.push(3);
    
    
    return answer;
}
    
   