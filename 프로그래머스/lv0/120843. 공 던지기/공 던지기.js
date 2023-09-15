function solution(numbers, k) {
    let answer = 1
    // 마지막 공을 던질 선수를 찾기위해 k-1 번까지 반복하며 다음 사람을 건너뛰도록 +2를 함
    for(let i = 0 ; i < k-1 ; i ++) {
        answer+=2
        // 마지막 번호를 넘어가는 경우 처음 선수에게 공이 전달되도록  배열의 크기만큼 마이너스
        if(answer > numbers.length) {
            answer-=numbers.length
        }
    }
    return answer
}

// number의 배열이 주어질 때
// k만큼의 공을 던졌을 떄의 결과 값

// number를 한단계 건너뛰는 순환을 해라.
// k번째의 번호를 찾아라