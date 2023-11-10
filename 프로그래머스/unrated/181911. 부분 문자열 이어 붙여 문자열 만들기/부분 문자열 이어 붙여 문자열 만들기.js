function solution(my_strings, parts) {
    var answer = [];
    for(let i = 0; i<parts.length; i++){
        const [a,b] = parts[i]
        answer.push(my_strings[i].slice(a,b+1))
    }
    return answer.join('');
}