function solution(clothes) {
    var answer = 1;
    let map = new Map()
    for(let i = 0; i<clothes.length; i++){
        map.has(clothes[i][1]) ?
            map.set(clothes[i][1], map.get(clothes[i][1]) +1) :
            map.set(clothes[i][1],1)

    }
    for(let [k,j] of map){

        answer *= j+1
    }
    return answer-1;
}


