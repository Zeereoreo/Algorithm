function combinations(arr,n){
    if(n===1) return arr.map((v)=>[v])
    const result = []
    
    arr.forEach((fixed,idx,arr) =>{
        const rest = arr.slice(idx+1)
        // console.log(fixed,"idx")
        const combis = combinations(rest,n-1);
        
        const combine = combis.map((v) => [fixed,...v])
        // console.log(rest, "h",combis,"g",combine,"f")
        result.push(...combine)
    })
    
    return result
}

function solution(orders, course) {
    const answer = [];
    
    for(const c of course){
        const menu = []
        for(const order of orders){
            const orderArr = order.split("").sort();
            const comb = combinations(orderArr,c)
            menu.push(...comb);
        }
        // console.log(menu)
        
        const counter = {};
        for(const m of menu){
            const key = m.join('')
            counter[key] = (counter[key] || 0) + 1
        
            }
        // console.log(counter,"counter")
        const max = Math.max(...Object.values(counter));
        
            if(max>1){
                for(const [key,value] of Object.entries(counter)){
                    if(value === max){
                        answer.push(key)
                }
            }
        }
    }
    return answer.sort()
}