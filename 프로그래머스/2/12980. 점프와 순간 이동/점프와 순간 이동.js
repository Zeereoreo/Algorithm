function solution(n){
    var ans = 0;
    let i = 0;
    while(n){
        if(n%2 === 0){
            n = n/2;
        } else{
            n--;
            ans++;;
        }
    }

    return ans;
}