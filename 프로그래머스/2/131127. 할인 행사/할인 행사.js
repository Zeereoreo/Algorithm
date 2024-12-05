function solution(want, number, discount) {
    var answer = 0;
    
    const wantObj = {};
    for(let i = 0; i<want.length; i++){
        wantObj[want[i]] = number[i]
    }
    for(let i = 0; i<discount.length - 9; i++){
        const dObj={}
        for(let j = i; j< i+10; j++){
            if(wantObj[discount[j]]){
                dObj[discount[j]] =( dObj[discount[j]] || 0) +1
            }
        }
        let isSame = true;
        for(let k in wantObj){
            // console.log(wantObj[k])
            if(dObj[k] !== wantObj[k]){
                isSame=false;
                break;
            }
        }
        if(isSame) answer++
    }
    return answer;
}