function solution(numbers, direction) {
    if(direction === 'right') {
        numbers.unshift(numbers.pop())
    } else {
        numbers.push(numbers.shift())
    }
    return numbers
}

// direction 의 방향에 따라 배열 전체의 +1 or -1
// 배열의 위치값 +1 을 해줘야한다.
// 오른쪽일 땐 맨 뒤에 것을 맨 앞으로
// 왼쪽 일 땐 맨 앞을 뒤로