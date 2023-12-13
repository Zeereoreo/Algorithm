function solution(numbers) {
    var answer = 0;
    
    let a = [1,2,3,4,5,6,7,8,9,0]
    for(let i = 0; i<a.length; i++){
        if(!numbers.includes(a[i])) answer+=a[i]
    }
    return answer;
}