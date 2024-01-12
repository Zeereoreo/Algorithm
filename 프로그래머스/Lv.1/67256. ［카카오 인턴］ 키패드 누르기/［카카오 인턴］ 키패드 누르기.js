function solution(numbers, hand) {
    var answer = '';
    let pad = {
        1 : [0,0],2 : [0,1],3 : [0,2],
        4 : [1,0],5 : [1,1],6 : [1,2],
        7 : [2,0],8 : [2,1],9 : [2,2],
        "*" : [3,0],0 : [3,1],"#" : [3,2]
    }
    let lL = "*" , rL = "#"
    
    function key(num,lL,rL,pad,hand){
        const l = Math.abs(pad[lL][0] - pad[num][0]) +
                  Math.abs(pad[lL][1] - pad[num][1])
        const r = Math.abs(pad[rL][0] - pad[num][0]) +
                  Math.abs(pad[rL][1] - pad[num][1])
        
        if(l === r) return hand === 'left' ? "L" : "R";
        return l < r ? "L" : "R"
    }
    
    for(const num of numbers){
        if(num%3 === 1){
            answer += "L"
            lL = num;
        }
        else if (num !== 0 && num%3 === 0){
            answer += "R"
            rL = num;
        }
        else {
            answer += key(num, lL, rL, pad, hand)
            answer[answer.length-1] === "L" ? lL = num : rL = num
        }
    }

    return answer;
}