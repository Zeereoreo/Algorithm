function solution(n, words) {
    var answer = [0,0];
    let stack = []
    for(let i = 0; i<words.length; i++){
        if(stack.length === 0){ 
            stack.push(words[i]) 
            continue;
        }
        const pre = stack[stack.length - 1]
        const preWord = pre[pre.length - 1]
        
        const post = words[i]
        const postWord = post[0]
        
        if(preWord !== postWord || stack.includes(post)){
            const who = (i%n) + 1;
            const count = Math.ceil((i+1)/n);
            
            answer = [who,count]
            break;
        }
        
        stack.push(words[i])
    }

    return answer;
}