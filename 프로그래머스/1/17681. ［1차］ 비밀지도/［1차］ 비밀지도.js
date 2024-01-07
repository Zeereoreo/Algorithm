
function solution(n, arr1, arr2) {
    let answer = [];

    
    for(let i=0; i<n ;i++) {
        let binaryNumber = (arr1[i] | arr2[i]).toString(2)
        answer.push(binaryNumber)
        
    }
   
    for(let i=0; i<n; i++) {
        while(answer[i].length < n) {
            answer[i] = '0' + answer[i]
        }
    }
    
    for(let i=0; i<n; i++) {
        answer[i] = answer[i].replace(/1/g, '#')
        answer[i] = answer[i].replace(/0/g, ' ')
    }

    return answer;
}