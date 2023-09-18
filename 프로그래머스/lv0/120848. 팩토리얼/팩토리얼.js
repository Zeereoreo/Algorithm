function solution(n) {
    let ans = 1;

    for(let i = 1; i <= n; i++){
        ans *= i;
        
        if(ans === n){
            return i;
        }
        
        if(ans > n){
            return i - 1;
        }
    }
}


//n의 값보다 크거나 같은 팩토리얼의 값을 리턴하라
//팩토리얼을 하려면 for 문 
//result의 팩토리얼을 구해야하는데