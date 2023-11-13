function solution(my_string, s, e) {
    var answer = [...my_string];
    let a = my_string.slice(0,s)
    let b = answer.slice(s,e+1).reverse().join('')
    let c = my_string.slice(e+1,my_string.length)
    answer = a+b+c
    return answer;
}