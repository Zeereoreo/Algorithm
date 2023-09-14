function solution(rsp) {
    let win = {2 : 0 , 0 : 5, 5 : 2};
    let answer = '';
    let lose = [...rsp];
    for(let i = 0; i<lose.length; i++){
        answer = answer + win[lose[i]]
    }
    return answer;
}

// 가위바위보를 낼 때 이기는 경우의 순서를 문자열로 리턴하라
// rsp를 배열로 만들 것인가 숫자로 가진걸로는
// 가위바위보의 이기는 짝을 지어준다.
// rsp에 맞게 리턴해준다.
// 205 -> 052