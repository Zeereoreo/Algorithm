function solution(t, p) {
    var answer = 0;
    let a = "";
    for(let i = 0; i<t.length - p.length +1; i++){
        a = t.slice(i,i+p.length)
        if(Number(a) <= Number(p)){
            answer ++
        }
    }
    return answer;
}