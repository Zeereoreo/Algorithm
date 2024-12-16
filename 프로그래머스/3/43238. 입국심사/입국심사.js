function solution(n, times) {

    times.sort((a,b) => a-b);
    let min = 0;
    let max = times[times.length -1] * n
    
    while(min <= max){
        const cur = Math.floor((min+max)/2)
        const people = times.reduce((acc,time) => acc+Math.floor(cur/time),0)
        if(people < n){
            min = cur +1;
        }else{
            max = cur - 1;
        }
    }
    return min;
}