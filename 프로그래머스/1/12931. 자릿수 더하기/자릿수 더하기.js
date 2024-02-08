function solution(n){
    let answer = 0;
    n = [...String(n)]
    return n.reduce((a,c) => ~~a+~~c,0)
}