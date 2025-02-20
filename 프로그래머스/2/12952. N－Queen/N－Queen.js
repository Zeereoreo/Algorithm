function search(n,y,width,diagonal1,diagonal2){
    let answer = 0;
    if(y===n) answer+=1
    else{
        for(let i = 0; i<n; i++){
            if(width[i] || diagonal1[i+y] || diagonal2[i-y+n]) continue;
            width[i] = diagonal1[i+y] = diagonal2[i-y+n] = true;
            answer += search(n,y+1,width,diagonal1,diagonal2)
            width[i] = diagonal1[i+y] = diagonal2[i-y+n] = false
        }
    }
    // console.log(n,y,width,diagonal1,diagonal2)
    return answer
}

function solution(n) {
    var answer = search(n,0,Array(n).fill(false),Array(n*2).fill(false),Array(n*2).fill(false))
    return answer;
}