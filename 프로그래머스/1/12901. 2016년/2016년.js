function solution(a, b) {
    var answer = '';
    // 1)
    let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 2)
    let day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let numCount = 0; 
    let index = 0;

    // 3)
    for(let i=0; i<a-1; i++) {
        numCount += date[i]
    }
    // 3)
    numCount += b;

    // 4)
    index = (numCount - 1) % 7; // 1월 1일이 포함되므로 1을 뺀 후, 배열의 길이로 나눈 나머지를 구함
    // 5)
    answer = day[index];

    return answer;
}