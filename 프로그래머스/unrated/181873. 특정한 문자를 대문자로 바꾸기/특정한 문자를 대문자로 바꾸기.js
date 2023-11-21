function solution(my_string, alp) {
    return [...my_string].map((el)=>{
        if(el === alp) return el.toUpperCase();
        else return el
    }).join("")
}