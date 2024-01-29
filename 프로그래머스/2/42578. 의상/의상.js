// function solution(clothes) {
//     var answer = 0;
//     let map = new Map()
//     for(let i = 0; i<clothes.length; i++){
//         map.set(map.get(clothes[i][1]), map.get(clothes[i][0] || 0) + 1)
//         console.log(clothes[i][1])

//     }
//     return answer;
// }

function solution(clothes) {
    const map = new Map()
    for (const [name,type] of clothes){
        if (map.get(type)) map.set(type,map.get(type)+1)
        else map.set(type,1)
    }
    let ret = 1
    for (const [key,val] of map){
        ret *= val+1
    }
    return ret-1
}
