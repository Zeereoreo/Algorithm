function solution(topping) {
    var answer = 0;
    let big = new Map()
    let little = new Map()
    
    for(let i = 0; i<topping.length; i++){
        if(big.has(topping[i])){
            big.set(topping[i], big.get(topping[i]) + 1 )
        }else {
            big.set(topping[i] , 1)
        }
    }
    
    for(let i = 0; i<topping.length; i++){
        if(big.get(topping[i]) === 1){
            big.delete(topping[i])
        } else {
            big.set(topping[i], big.get(topping[i]) - 1 )
        }
        
        if(little.has(topping[i])){
            little.set(topping[i], little.get(topping[i]) + 1)
        } else {
            little.set(topping[i], 1)
        }
        
        if(big.size === little.size){
            answer++
        }
    }
    return answer;
}