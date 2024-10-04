function solution(N, stages) {
    var answer = [];
    let challenger = new Array(N + 2).fill(0)
    for(const stage of stages){
        challenger[stage] +=1;
    }
    // 도전자 수를 구한다.
    let fail = {};
    let total = stages.length;
    for(let i = 1; i<=N; i++){
        if(challenger[i] === 0){
            fail[i] = 0;
            continue;
        }
        fail[i] = challenger[i]/total;
        total-=challenger[i];
    }
    let result = Object.entries(fail).sort((a,b) => b[1] - a[1])

    return result.map((e) => Number(e[0]))
    
}