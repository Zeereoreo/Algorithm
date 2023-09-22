function solution(n) {  
    let divisor = 1
    let arr =[]
    
    while(divisor<=n){
        if(n%divisor === 0){
            arr.push(divisor)
        }
         divisor++
    } 
     return arr
}

// 약수를 구하고 오름차순으로 리턴
