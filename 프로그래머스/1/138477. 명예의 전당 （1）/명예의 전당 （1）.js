function solution(k, score) {
    var answer = [];
    let honer = [];
    for(let i = 0; i<score.length; i++){
        honer.push(score[i])
        honer.sort((a,b) => a-b)
        if(honer.length > k){
            honer.shift()
        }
        answer.push(honer[0])
        
    }
    return answer;
}