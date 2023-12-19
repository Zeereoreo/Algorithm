function solution(n)
{
    
    return String(n).split("").map(el=>+el).reduce((a,c)=>a+c);
}