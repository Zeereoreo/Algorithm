function solution(money) {
    const a = Math.floor(money/5500);
    const b = money%5500;
    
    var answer = [a, b];
    
    return answer;
}