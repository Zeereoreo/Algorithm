function solution(arr, intervals) {
    var answer = [];
    let [a,b] = intervals
    
    let c = arr.slice(a[0],a[1]+1)
    let d = arr.slice(b[0],b[1]+1)
    
    return c.concat(d);
}