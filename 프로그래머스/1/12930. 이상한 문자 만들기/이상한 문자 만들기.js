function solution(s) {
    var answer = '';
    let a = s.split(" ")
    for(let i = 0; i<a.length; i++){
        for(let j = 0; j<a[i].length; j++){
            if(j%2 === 0) answer += a[i][j].toUpperCase()
            else answer += a[i][j].toLowerCase()
        }
        answer += " "
    }
   
    return answer.slice(0,answer.length-1);
}