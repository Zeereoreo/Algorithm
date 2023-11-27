function solution(arr) {
    const answer = [...arr];
    let i = 0;

    while (true) {
        // answer 의 길이가 2의 i 제곱과 일치하는 경우 break 를 통해 answer 를 리턴한다
        if (answer.length === 2 ** i) break;
        // answer 의 길이가 2의 i 제곱보다 큰 경우 i 를 1씩 증가시킨다
        if (answer.length > 2 ** i) i++;
        else {
            // 2의 i 제곱 값을 answer 길이만큼 감소시킨다
            // answer 에 0 을 얼마나 추가해야 하는 지 차이 값을 구하는 것
            const diff = (2 ** i) - answer.length;

            // 차이 값인 diff 만큼 반복하며 0 을 추가한다
            for (let j=0; j<diff; j++) {
                answer.push(0);
            }
        }
    }

    return answer;
}