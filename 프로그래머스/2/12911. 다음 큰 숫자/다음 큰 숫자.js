function solution(n) {
    var answer = 0;
    let nNum = n.toString(2).split("1").length;
    let nextNum;
    
    while(nNum !== nextNum){
        n++
        nextNum = n.toString(2).split("1").length;
    }
    
    
    
    return n;
}

