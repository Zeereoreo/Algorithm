function solution(n, m, section) {
    var answer = 0;
    let a = 0;
    let arr = new Array(n).fill(true);

    section.forEach((e)=> {
        
        if(e > a){
         a = e+m-1;
         answer ++;

        }

    })

    
    return answer;
}