function solution(a, b) {
    let c = Number(String(a) + (String(b)));
    let d = Number(String(b) + (String(a)));
    if (c > d)  return c;
    else  return d;
    
}