function solution(s) {
    var answer = 0;

    for (let i = 0; i < s.length; i++) {
        let stack = [];
        let isValid = true; // 올바른 괄호 여부를 확인하는 변수
        
        for (let c of s) {
            if (c === "(" || c === "{" || c === "[") {
                stack.push(c);
            } else if (c === ")" && stack[stack.length - 1] === "(") {
                stack.pop();
            } else if (c === "}" && stack[stack.length - 1] === "{") {
                stack.pop();
            } else if (c === "]" && stack[stack.length - 1] === "[") {
                stack.pop();
            } else {
                isValid = false; // 짝이 맞지 않으면 유효하지 않음
                break;
            }
        }
        
        if (isValid && stack.length === 0) answer++;
        
        s = s.slice(1) + s[0]; // 문자열을 회전
    }
    
    return answer;
}
