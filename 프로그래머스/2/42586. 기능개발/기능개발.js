function solution(progresses, speeds) {
    var answer = [];
    let n = progresses.length;
    let dayLeft = progresses.map((e,i) => Math.ceil((100-e)/speeds[i]))
    
    let count = 0;
    let maxDay = dayLeft[0];
    
    for(let i = 0; i<n; i++){
        if(dayLeft[i] <= maxDay){
            count++;
        }else{
            answer.push(count);
            count = 1;
            maxDay = dayLeft[i];

        }
    }
    
    answer.push(count)
    return answer;
}