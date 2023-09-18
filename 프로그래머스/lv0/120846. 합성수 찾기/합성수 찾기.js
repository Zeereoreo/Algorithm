function solution(n) {
    let result = 0;
    for ( let i = 4; i<= n; i++){
        let a = 0
        for (let j = 1; j<=i; j++){ 
            if(i%j === 0){
                a ++;
            }
        }
    if( a > 2) result ++;
    } return result;
}

// n안의 약수의 개수가 3개인 숫자를 리턴하라
// a의 초기화 위치 체크
// 이중 for문

