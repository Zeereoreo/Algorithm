function solution(s, n) {
    var answer = '';
    let abc = "abcdefghijklmnopqrstuvwxyz"
    let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i = 0; i<s.length; i++){
        if(s[i] === " "){ 
            answer += " "
        continue;
            
        }
        let text = abc.includes(s[i])? abc : ABC
        let caeser = text.indexOf(s[i]) + n
        if(caeser >= text.length) caeser -= text.length
        answer += text[caeser]
    }
    return answer;
}