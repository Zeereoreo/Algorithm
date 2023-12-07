function solution(s) {
    var answer = 0;
    let arr = [];
 
    
    for(let i = 0; i<s.length; i++){
        arr.push(s[i])
        let same = arr.filter(el => el === arr[0]);
        let not = arr.filter(el => el !== arr[0]);
        
        if(same.length === not.length){
            answer++;
            arr = [];
        }
    }
    
    if(arr.length !== 0){
            answer++;
        }
        
    return answer;
}
    
//     s[0] = b 
//     s[1] = a
//     나누는 기준이 필요함. s[0] = b -> x 이고 s[1] 다른 문자가 나오고 같아지는 순간 자르기.
//     s[2] = n
//     s[3] = a
    
//     s[4] = n
//     s[5] = a