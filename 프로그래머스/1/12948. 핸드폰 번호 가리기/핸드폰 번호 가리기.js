function solution(phone_number) {
    var answer = '';
    let a = phone_number.slice(-4)
    for(let i = 0; i<phone_number; i++){
        if(i < phone_number.length - 4){
            answer += "*"
        } else {
            answer += a;
            break;
        }
    }
    return answer;
}