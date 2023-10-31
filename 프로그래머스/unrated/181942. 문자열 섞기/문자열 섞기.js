function solution(str1, str2) {
    var a = [...str1];
    var b = [...str2];
    var answer = [];
    for(let i = 0; i<str1.length; i++){
        answer.push(a[i])
        answer.push(b[i])
    }
    return answer.join('');
}