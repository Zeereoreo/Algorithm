function solution(s) {
    
    let zero = 0 , num = 0;
    while(s.length > 1){
        let remove = s.split("").filter(e => e === "0")
        let remain = s.split("").filter(e => e === "1")
        num++
        zero += remove.length
        s = remain.length.toString(2)
    }
    return [num , zero];
}