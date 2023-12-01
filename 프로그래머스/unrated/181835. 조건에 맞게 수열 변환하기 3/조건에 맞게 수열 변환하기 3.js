function solution(arr, k) {
    return arr.map((el) =>{
       if(k% 2 !== 0) return el*k
        else return el+k
    })
}