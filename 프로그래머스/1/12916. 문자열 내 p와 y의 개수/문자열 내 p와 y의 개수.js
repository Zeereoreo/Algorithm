function solution(s){
    let pstr = 0;
    let sstr = 0;
    for(let i =0 ; i<s.length; i++){
        if(s[i].includes("p") || s[i].includes("P")) pstr++
        else if(s[i].includes("y") || s[i].includes("Y")) sstr++
        
    }
    
    
    return pstr === sstr ? true : false
}