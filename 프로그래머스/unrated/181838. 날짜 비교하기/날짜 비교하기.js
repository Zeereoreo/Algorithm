function solution(date1, date2) {

    let [a,b,c] = date1
    let [d,e,f] = date2
    if(a === d && b === e && c === f) return 0
    else if (a === d && b === e && c < f) return 1
    else if (a === d && b === e && c >= f) return 0
    else if (a === d && b < e ) return 1
    else if (a === d && b >= e) return 0
    else if (a < d ) return 1
    else return 0
    
}