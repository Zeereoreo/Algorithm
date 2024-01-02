function solution(s) {
    var answer = false;
    if (s.length === 4 || s.length === 6){
        if(s.replace(/\d/g,'').length === 0 )
            answer = true;
    }
    return answer;
}