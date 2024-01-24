function solution(k, tangerine) {
    let answer = 0;
    // k = another.length
    // k = 4
    // [1,2,2,3,3,4,5,5] 1의개수 = 1 2의개수 = 2 3의개수 = 2 4의개수 = 1 5의개수 = 2
    // 내림차순 => {2 : 2 , 3 : 2 , 5 : 2 , 1 : 1 4 : 1}
    // 박스에 담는다 => [2,2,3,3] 최솟값 = 2
    // [2,2,3,3]
    // [2,2,5,5]
    // [3,3,5,5]
    let map = new Map()
    for(let i = 0; i<tangerine.length; i++){
        const target = map.get(tangerine[i])
            map.set(tangerine[i], (target||0) + 1);
        }
    let arr = [...map].sort((a,b) => b[1] - a[1])
    
    for(let i = 0; i<arr.length; i++){
        if(k > 0){
        k -= arr[i][1]
        answer++
        }
    }
   
    return answer;
    }
