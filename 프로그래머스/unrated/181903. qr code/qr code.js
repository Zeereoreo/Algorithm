function solution(q, r, code) {
    var answer = '';
    for(let i = 0; i<code.length; i++){
        let a = '';
        if(i%q === r) answer+= code[i]
    }
    return answer;
}