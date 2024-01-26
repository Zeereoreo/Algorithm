function solution(want, number, discount) {
  let answer = 0;
  let map = new Map()  
    for(let i = 0; i<want.length; i++){
      map.set(want[i], number[i])
    }
    for(let i = 0; i<discount.length; i++){
        let dMap = new Map()
        let copy = discount.slice(i, i + 10);
        for (let j = 0; j < copy.length; j++) {
            dMap.set(copy[j], (dMap.get(copy[j]) || 0) + 1);
        }
        
        let isSame = true;
        for(let [key,value] of map){
            if(dMap.get(key) !== value){
                isSame = false;
                break;
            }
        }
        
        if(isSame) answer++
        

    }
    
    
  return answer;
}