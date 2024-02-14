function solution(num) {
    let i = 0;
    while(num > 1){
        if(num%2 === 0) {
            i++
            num = num/2
        }
        else {
            i++
            num = (num *3) + 1
        }
        
        if(i >= 500) return -1
    }
    return i;
}