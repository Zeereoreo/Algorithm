function solution(n) {
    let answer = [];
    let i = 2;
    while (n != 1) {
        // 나눠 떨어지면 해당 수는 약수
        if (n % i == 0) {
            answer.push(i)
            // 해당 약수로 나눠 떨어질 때까지 반복
            while (n % i == 0) {
                n = n / i; 
            }
        }
        i ++;
    }
    return answer;
}

// 나누고 같은 값을 뺀 값을 리턴한다.
// 소인수분해를 어떻게 할것인가.. while문?? 뭘 기준으로?? 소수를 기준으로
// 소수를 나열 해 줄 함수가 필요한가??