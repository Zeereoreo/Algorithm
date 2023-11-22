function solution(myString, pat) {
    var answer = 0; 
    // myString.subtring(pat)
    for(let i =0; i<myString.length; i++){
        if(myString.slice(i,i+pat.length) === pat)
        answer ++
    }
    return answer;
}