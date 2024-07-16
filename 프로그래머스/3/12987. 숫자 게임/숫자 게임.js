function solution(A, B) {
    var answer = 0;
    A = A.sort((a,b) => b-a)
    B = B.sort((a,b) => a-b)
    for(let i = 0; i<A.length; i++){
        let max = B[B.length-1]
        if(A[i] < max){
            answer++
            B.pop()
        }
    } 
    return answer;
}