function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}

// 내림차순 만든 뒤 제일 큰 두 숫자를 곱해서 리턴