function solution(n,a,b){
    var answer = 0;
    while(a !== b){
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        answer++
        // a = 4 b = 7
        // a = 2 b = 4 answer = 1
        // a = 1 b = 2 answer = 2
        // a = 1 b = 1 answer = 3
    }

    return answer;
}