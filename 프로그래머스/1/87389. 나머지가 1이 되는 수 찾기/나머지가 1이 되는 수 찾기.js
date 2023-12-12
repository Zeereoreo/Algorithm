function solution(n) {
    var answer = 0;
    let a = [];
    for(let i = 1; i<n; i++){
        if(n%i === 1){
            a.push(i)
        }
    }
    for(let i = 0; i<a.length; i++){
        answer = Math.min(a[i],a[i+1])
    }
    return a[0];
}