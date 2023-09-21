function solution(my_string) {
    let arr = [];
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toUpperCase()) {
            arr.push(my_string[i].toLowerCase())
        } else {
            arr.push(my_string[i].toUpperCase())
        }
    } return arr.join('')
}
       


//전체를 보고 소문자인 것은 대문자로 대문자인것은 소문자로
//전체를 보고 기억해놨다가 전체를 작게하고 소문자만 대문자로