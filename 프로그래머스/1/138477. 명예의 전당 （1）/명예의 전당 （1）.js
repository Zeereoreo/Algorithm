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

function solution(k, score) {
    let answer = [];
    let tempArr = [];


    for(let i=0; i<score.length; i++) {

        tempArr.push(score[i])

        tempArr.sort((a, b)=>a-b);
 
        if(tempArr.length > k) {
            if(tempArr[0] < score[i]) {
                tempArr.shift();
            } else if(tempArr[0] >= score[i]) {
                tempArr.shift();
            }
        }

        answer.push(tempArr[0])
    }

    return answer;
}