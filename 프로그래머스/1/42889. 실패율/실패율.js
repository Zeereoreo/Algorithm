function solution(N, stages) {
    var answer = [];
    for(let i = 1; i<=N; i++){
        let reach = stages.filter(e => e >= i).length;
        let cur = stages.filter(e => e === i).length;
        answer.push([i, cur/reach]);
    }
    answer.sort((a,b) => b[1] - a[1]);
    return answer.map(e => e[0]);
}