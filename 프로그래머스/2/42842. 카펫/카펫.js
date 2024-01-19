function solution(brown, yellow) {
    var answer = [];
    let all = brown + yellow
    for(let i = 3; i<all; i++){
        let W = all/i;
        let H = i;
        if(W<H) continue;
        if((W-2) * (H-2) === yellow){
            answer = [W,H]
        }
    }
    
    return answer;
}