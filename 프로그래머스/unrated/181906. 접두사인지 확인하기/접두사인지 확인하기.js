function solution(my_string, is_prefix) {
    var answer = [];
    for(let i = 1; i<=my_string.length; i++){
        let a = '';
        a = my_string.slice(0,i);
       
        answer.push(a)
    }
    return answer.includes(is_prefix) ? 1 : 0;
}