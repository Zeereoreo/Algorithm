function solution(sizes) {
    var answer = 0;
    let a = [0,0];
    let w = 0;
    let h = 0;
    for(let i = 0; i<sizes.length; i++){
        let [w,h] = sizes[i].sort((a,b)=> b - a)
        if(w>a[0]) a[0] = w
        if(h>a[1]) a[1] = h
    }
    
    return a[0]*a[1];
}