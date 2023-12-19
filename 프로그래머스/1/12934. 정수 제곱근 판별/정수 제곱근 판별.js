function solution(n) {
    // var answer = 0;
    // for(let i = 1; i<=n; i++){
    //     if(i*i === n){
    //         answer = (i+1)*(i+1)
    //     }
    // }
    if(Math.sqrt(n)%1 === 0){
        return (Math.sqrt(n)+1)*(Math.sqrt(n)+1)
    } else {
        return -1
    }
    // return answer;
}