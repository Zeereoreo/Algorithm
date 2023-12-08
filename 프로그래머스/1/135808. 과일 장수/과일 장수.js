function solution(k, m, score) {
    var answer = 0;
    let sort = score.sort((a,b) => b-a)
    let arr = [];
    for(let i = 0; i<sort.length; i+=m){
        let a = [];
        if(sort[i] > k){
            sort.shift()
        }else {
            arr.push(sort.slice(i,m+i));
        }
    }
    arr.map((el)=> {
        if(el.length === m){
            answer+= Math.min(...el) * m
        }
    })
        return answer;
}