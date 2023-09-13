function solution(n) {
    let result = 0;
    for (let i = 0; i<n+1 ; i++){
        if(n%i === 0){
            result += 1
        }
    }
    return result
}